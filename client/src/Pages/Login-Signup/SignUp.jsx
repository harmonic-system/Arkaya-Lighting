import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../store/Auth";
import "./Login-Signup.css";

const SignUp = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    password: "",
    confirmPassword: ""
  })

  const { storeTokenInLocalStorage, server } = useAuth()

  const navigate = useNavigate()

  const [showPass, setShowPass] = useState(true)
  const [showConPass, setShowConPass] = useState(true)
  const [inputTypePass, setInputTypePass] = useState("password")
  const [inputTypeConPass, setInputTypeConPass] = useState("password")


  const toggleInputPass = () => {
    setInputTypePass((prev) => (prev === "password" ? "text" : "password"))
    setShowPass((pre) => !pre)
  }
  const toggleInputConPass = () => {
    setInputTypeConPass((prev) => (prev === "password" ? "text" : "password"))
    setShowConPass((pre) => !pre)
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
      const response = await fetch(`${server}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      const res = await response.json()

      if (response.ok) {
        setUser({
          name: "",
          email: "",
          phone: "",
          organization: "",
          password: "",
          confirmPassword: ""
        })

        // console.log(res);

        storeTokenInLocalStorage(res.token)
        toast.success(res.message)
        navigate("/")
      }
      else {
        toast.error(res.message)
      }

      // console.log(res);
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className="landing-container">
        <div className="landing-content">
          <h1>Glad to have you!</h1>

          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <input type="text" placeholder="Name" onChange={handleChange} value={user.name} name="name" required />
            <input type="email" placeholder="Email" onChange={handleChange} value={user.email} name="email" required />
            <input type="number" placeholder="Phone" onChange={handleChange} value={user.phone} name="phone" required />
            <input type="text" placeholder="Organization (optional)" onChange={handleChange} value={user.phone} name="organization" />
            <div className="position-relative mt-2">
              <input className="form-control rounded" onChange={handleChange} value={user.password} placeholder="Password" type={inputTypePass} name="password" required />
              {showPass ? <FaEye className="text-dark position-absolute eye" onClick={toggleInputPass} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInputPass} />}
            </div>
            <div className="position-relative mt-3">
              <input className="form-control rounded" onChange={handleChange} value={user.confirmPassword} placeholder="Confirm Password" type={inputTypeConPass} name="confirmPassword" required />
              {showConPass ? <FaEye className="text-dark position-absolute eye" onClick={toggleInputConPass} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInputConPass} />}
            </div>
            <button type="submit" className="mt-3">Sign up</button>
            <p className="text-center mt-3">Back to Login? <Link to="/login" style={{ color: "#ffc221" }}>Login</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp