import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../store/Auth";
import "./Login-Signup.css";
import { useAuthContext } from "../../store/authContext";


const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { login, error, loading } = useAuthContext()
  // const { storeTokenInLocalStorage, server } = useAuth()
  const navigate = useNavigate()
  const [show, setShow] = useState(true)
  const [inputType, setInputType] = useState("password")

  const toggleInput = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"))
    setShow((pre) => !pre)
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <div className="landing-container">
        <div className="landing-content">
          <h1>Welcome Back !</h1>

          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={handleChange} value={user.email} name="email" required />
            <div className="position-relative">
              <input type={inputType} placeholder="Password" onChange={handleChange} value={user.password} name="password" required />
              {show ? <FaEye className="text-dark position-absolute eye" onClick={toggleInput} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInput} />}
            </div>
            <button type="submit" className="mt-3">{loading ? "Login..." : "Login"}</button>
            <p className="text-center mt-3">Not a User? <Link to="/signup" style={{ color: "#ffc221" }}>SignUp</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login