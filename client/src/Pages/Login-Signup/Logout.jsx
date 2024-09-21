import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import { toast } from "react-toastify";

const Logout = () => {

  const { setToken, setAuth } = useAuth()

  const logoutUser = () => {
    setToken("")
    setAuth({
      name: "",
      email: "",
      phone: "",
      organization: "",
      isAdmin: ""
    })
    localStorage.removeItem("Token")
    localStorage.removeItem("user")

  }

  useEffect(() => {
    logoutUser()
    if (logoutUser) {
      toast.success("Logout Succesfully")
    }
  }, [])

  return (
    <>
      <Navigate to="/" />
    </>
  )
}

export default Logout;