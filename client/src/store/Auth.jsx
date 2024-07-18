import { createContext, useContext, useEffect, useState } from "react";
const server = import.meta.env.VITE_SERVER;
import { toast } from "react-toastify"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("Token"))
  const [user, setUser] = useState("")
  const authorizationToken = `Bearer ${token}`

  const [homeCarousel, setHomeCarousel] = useState([])
  const [homeProduct, setHomeProduct] = useState([])

  const [application, setApplication] = useState([])


  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("Token", serverToken)
  }

  const userAuthentication = async () => {
    try {
      const response = await fetch(`${server}/api/v1/auth/user`, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })
      // console.log(response);

      if (response.ok) {
        const userData = await response.json()
        setUser(userData.userData);
        // console.log(userData.userData);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logoutUser = () => {
    setToken("")
    toast.success("Logout Succesfully")
    return localStorage.removeItem("Token")
  }

  const getAllHomeCarousel = async () => {
    try {

      const response = await fetch(`${server}/api/v1/homecontent/homecarousel`, {
        method: "GET"
      })
      const res = await response.json()
      // console.log(res);
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

      // console.log(res);
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
    userAuthentication()
    getAllHomeCarousel()
    getAllHomeProduct()
  }, [])


  return (
    <AuthContext.Provider value={{
      server, storeTokenInLocalStorage, user, logoutUser, authorizationToken, homeCarousel, getAllHomeCarousel, homeProduct, getAllHomeProduct, application, getAllApplications,
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




