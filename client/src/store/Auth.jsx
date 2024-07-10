import { createContext, useContext, useEffect, useState } from "react";
const server = import.meta.env.VITE_SERVER;
import { toast } from "react-toastify"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("Token"))
  const [user, setUser] = useState("")
  const authorizationToken = `Bearer ${token}`

  const [decorativeProducts, setDecorativeProducts] = useState([])
  const [interiorProducts, setInteriorProducts] = useState([])
  const [exteriorProducts, setExteriorProducts] = useState([])
  const [entertainmentProducts, setEntertainmentProducts] = useState([])
  const [ledstripProducts, setLEDStripProducts] = useState([])
  const [homeCarousel, setHomeCarousel] = useState([])
  const [homeProduct, setHomeProduct] = useState([])



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


  // Get Products Of Lighting Fixtures

  // Entertainment Products List

  // Moving Head Series Lamp

  const getAllEntertainmentMovingHeadSeriesLampProducts = async()=>{
    try {
      
    } catch (error) {
      
    }
  }

  const getAllDecorativeProducts = async () => {
    try {
      const response = await fetch(`${server}/api/v1/products/getdecorativeproducts`, {
        method: "GET",
      })

      const res = await response.json()
      setDecorativeProducts(res)
    } catch (error) {
      toast.error("Failed to get products")
    }
  }

  const getAllInteriorProducts = async () => {
    try {
      const response = await fetch(`${server}/api/v1/products/getinteriorproducts`, {
        method: "GET",
      })

      const res = await response.json()
      setInteriorProducts(res)
    } catch (error) {
      toast.error("Failed to get products")
    }
  }

  const getAllExteriorProducts = async () => {
    try {
      const response = await fetch(`${server}/api/v1/products/getexteriorproducts`, {
        method: "GET",
      })

      const res = await response.json()
      setExteriorProducts(res)
    } catch (error) {
      toast.error("Failed to get products")
    }
  }

  const getAllEntertainmentProducts = async () => {
    try {
      const response = await fetch(`${server}/api/v1/products/getentertainmentproducts`, {
        method: "GET",
      })

      const res = await response.json()
      setEntertainmentProducts(res)
    } catch (error) {
      toast.error("Failed to get products")
    }
  }

  const getAllLEDStripProducts = async () => {
    try {
      const response = await fetch(`${server}/api/v1/products/getledstripproducts`, {
        method: "GET",
      })

      const res = await response.json()
      setLEDStripProducts(res)
    } catch (error) {
      toast.error("Failed to get products")
    }
  }

  







  useEffect(() => {
    userAuthentication()
    // getAllDecorativeProducts()
    getAllHomeCarousel()
    getAllHomeProduct()
  }, [])


  return (
    <AuthContext.Provider value={{ server, storeTokenInLocalStorage, user, logoutUser, authorizationToken, decorativeProducts, getAllDecorativeProducts, interiorProducts, getAllInteriorProducts, exteriorProducts, getAllExteriorProducts, entertainmentProducts, getAllEntertainmentProducts, ledstripProducts, getAllLEDStripProducts, homeCarousel, getAllHomeCarousel, homeProduct, getAllHomeProduct }} >
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




