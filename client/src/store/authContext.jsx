import { createContext, useContext, useEffect, useReducer } from "react";
import authReducer from "./Reducer/authReducer";
import axios from "axios";
const server = import.meta.env.VITE_SERVER;

const AuthContext = createContext()

const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
    isLoading: false,
    error: null,
}

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            dispatch({
                type: "LOAD_TOKEN",
                payload: { token }
            })


            const fetchUserData = async () => {
                try {
                    const response = await axios.get(`${server}/api/v1/auth/user`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    const { data } = response.data
                    dispatch({ type: "LOAD_USER_DATA", payload: { data, token } })
                } catch (error) {
                    console.log("Failed to fetch user data", error);
                    logout();
                }
            }
            fetchUserData()
        }
    }, [state.isAuthenticated])

    const login = async (email, password) => {
        dispatch({ type: "AUTH_LOADING" })

        try {
            const response = await axios.post(`${server}/api/v1/auth/login`,
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            // console.log(response);

            const { token, data } = response.data;
            // console.log(token, data);
            

            localStorage.setItem("token", token)

            dispatch({ type: "LOGIN", payload: { token, data } })

        } catch (error) {
            dispatch({
                type: "LOGIN_ERROR",
                payload: error.response?.data?.message || "Login Failed",
            })
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        dispatch({ type: "LOGOUT" })
    }

    const signup = async (user) => {
        dispatch({ type: "AUTH_LOADING" })

        try {
            const response = await axios.post(`${server}/api/v1/auth/signup`,
                user,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            console.log(response.data);

            const { token, data } = response.data

            localStorage.setItem("token", token)

            dispatch({
                type: "SIGNUP",
                payload: { token, data }
            })

        } catch (error) {
            dispatch({
                type: "SIGNUP_ERROR",
                payload: error.response?.data?.message || "SignUp Failed",
            })
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: state.isAuthenticated,
            token: state.token,
            user: state.user,
            isLoading: state.isLoading,
            error: state.error,
            signup,
            login,
            logout,
            server,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => {
    const AuthContextValue = useContext(AuthContext)

    if (!AuthContextValue) {
        throw new Error("useAuthContext used outside of the Provider")
    }

    return AuthContextValue
}

export { AuthContext, AuthProvider, useAuthContext }


// import { createContext, useContext, useEffect, useReducer } from "react";
// import authReducer from "./Reducer/authReducer";
// import axios from "axios";

// const server = import.meta.env.VITE_SERVER;

// const AuthContext = createContext();

// const initialState = {
//     isAuthenticated: false,
//     token: null,
//     user: null,
//     isLoading: false,
//     error: null,
// };

// const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, initialState);

//     useEffect(() => {
//         const token = localStorage.getItem("token");

//         if (token) {
//             dispatch({
//                 type: "LOAD_TOKEN",
//                 payload: { token },
//             });

//             const fetchUserData = async () => {
//                 try {
//                     const response = await axios.get(`${server}/api/v1/auth/user`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     });

//                     const { data } = response.data;
//                     dispatch({ type: "LOAD_USER_DATA", payload: { data, token } });
//                 } catch (error) {
//                     console.log("Failed to fetch user data", error);
//                     logout();
//                 }
//             };
//             fetchUserData();
//         }
//     }, [state.isAuthenticated]); 

//     const login = async (email, password) => {
//         dispatch({ type: "AUTH_LOADING" });

//         try {
//             const response = await axios.post(
//                 `${server}/api/v1/auth/login`,
//                 { email, password },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             const { token, data } = response.data;
//             localStorage.setItem("token", token);

//             dispatch({ type: "LOGIN", payload: { token, data } });
//         } catch (error) {
//             dispatch({
//                 type: "LOGIN_ERROR",
//                 payload: error.response?.data?.message || "Login Failed",
//             });
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem("token");
//         dispatch({ type: "LOGOUT" });
//     };

//     const signup = async (user) => {
//         dispatch({ type: "AUTH_LOADING" });

//         try {
//             const response = await axios.post(
//                 `${server}/api/v1/auth/signup`,
//                 user,
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             const { token, data } = response.data;
//             localStorage.setItem("token", token);

//             dispatch({
//                 type: "SIGNUP",
//                 payload: { token, data },
//             });
//         } catch (error) {
//             dispatch({
//                 type: "SIGNUP_ERROR",
//                 payload: error.response?.data?.message || "SignUp Failed",
//             });
//         }
//     };

//     return (
//         <AuthContext.Provider
//             value={{
//                 isAuthenticated: state.isAuthenticated,
//                 token: state.token,
//                 user: state.user,
//                 isLoading: state.isLoading,
//                 error: state.error,
//                 signup,
//                 login,
//                 logout,
//                 server,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };

// const useAuthContext = () => {
//     const AuthContextValue = useContext(AuthContext);

//     if (!AuthContextValue) {
//         throw new Error("useAuthContext used outside of the Provider");
//     }

//     return AuthContextValue;
// };

// export { AuthContext, AuthProvider, useAuthContext };


