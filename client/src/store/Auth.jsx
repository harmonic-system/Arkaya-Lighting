import { createContext, useContext, useEffect, useState } from "react";
const server = import.meta.env.VITE_SERVER;
import { toast } from "react-toastify"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("Token"))
  const authorizationToken = `Bearer ${token}`

  const [homeCarousel, setHomeCarousel] = useState([])
  const [homeProduct, setHomeProduct] = useState([])

  const [application, setApplication] = useState([])

  const [auth, setAuth] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    return {
      name: storedUser.name || "",
      email: storedUser.email || "",
      phone: storedUser.phone || "",
      organization: storedUser.organization || "",
      isAdmin: storedUser.isAdmin || "",
    };
  });

  // console.log(auth);

  const storeTokenInLocalStorage = (serverToken, user) => {
    setToken(serverToken)
    setAuth({
      name: user.name,
      email: user.email,
      phone: user.phone,
      organization: user.organization,
      isAdmin: user.isAdmin
    })

    localStorage.setItem("Token", serverToken);

    // Store the user object as a JSON string in localStorage
    localStorage.setItem("user", JSON.stringify({
      name: user.name,
      email: user.email,
      phone: user.phone,
      organization: user.organization,
      isAdmin: user.isAdmin

    }));
    // return localStorage.setItem("Token", serverToken)
  }

  let isLoggedIn = !!token;


  const getAllHomeCarousel = async () => {
    try {

      const response = await fetch(`${server}/api/v1/homecontent/homecarousel`, {
        method: "GET"
      })
      const res = await response.json()
      setHomeCarousel(res)
    } catch (error) {
      toast.error("Failed to get Home Carousels")
    }
  }

  const getAllHomeProduct = async () => {
    try {
      const response = await fetch(`${server}/api/v1/homecontent/homeproduct`, {
        method: "GET"
      })
      const res = await response.json()

      setHomeProduct(res)
    } catch (error) {
      toast.error("Failed to get Home Products")
    }
  }


  const getAllApplications = async () => {
    try {
      const response = await fetch(`${server}/api/v1/application/getapplication`, {
        method: "GET",
      })

      const res = await response.json()
      setApplication(res)
    } catch (error) {
      toast.error("Failed to get Applications")
    }
  }


  useEffect(() => {
    getAllHomeCarousel()
    getAllHomeProduct()
  }, [])


  return (
    <AuthContext.Provider value={{
      auth, setAuth, isLoggedIn, server, storeTokenInLocalStorage, authorizationToken, setToken, homeCarousel, getAllHomeCarousel, homeProduct, getAllHomeProduct, application, getAllApplications,
    }} >
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




