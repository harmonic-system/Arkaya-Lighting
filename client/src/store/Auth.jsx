import { createContext, useContext, useEffect, useState } from "react";
const server = import.meta.env.VITE_SERVER;
import { toast } from "react-toastify"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("Token"))
  const [user, setUser] = useState("")
  const authorizationToken = `Bearer ${token}`




  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("Token", serverToken)
  }

  const userAuthentication = async () => {
    try {
      const response = await fetch(`${server}api/v1/auth/user`, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })
      console.log(response);

      if (response.ok) {
        const userData = await response.json()
        setUser(userData.userData);
        console.log(userData.userData);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }





  useEffect(() => {
    userAuthentication()
  }, [])


  return (
    <AuthContext.Provider value={{ storeTokenInLocalStorage, user }} >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {

  const AuthContextValue = useContext(AuthContext)

  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the Provider")
  }

  return AuthContextValue
}

export { AuthContext, AuthProvider, useAuth }