import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

const Logout = () => {

  const { logoutUser } = useAuth()
  // 
  useEffect(() => {
    logoutUser()
  }, [])

  return (
    <>
      <Navigate to="/" />
    </>
  )
}

export default Logout;