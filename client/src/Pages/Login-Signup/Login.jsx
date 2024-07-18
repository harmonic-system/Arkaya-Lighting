import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../store/Auth";
import "./Login-Signup.css";


const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { storeTokenInLocalStorage, server } = useAuth()
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
      const response = await fetch(`${server}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })

      const res = await response.json()

      if (response.ok) {
        setUser({
          email: "",
          password: ""
        })
        storeTokenInLocalStorage(res.token)
        toast.success(res.message)
        navigate("/")
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      toast.error(error.message)
      // console.log(error.message);
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
            <button type="submit" className="mt-3">Login</button>
            <p className="text-center mt-3">Not a User? <Link to="/signup" style={{ color: "#ffc221" }}>SignUp</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login