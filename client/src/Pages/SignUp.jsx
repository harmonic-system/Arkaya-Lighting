import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../store/Auth"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
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
    const name = e.target.name
    const value = e.target.value

    setUser({
      ...user,
      [name]: value
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
          password: "",
          confirmPassword: ""
        })

        console.log(res);

        storeTokenInLocalStorage(res.token)
        toast.success(res.message)
        navigate("/")
      }
      else {
        toast.error(res.message)
      }

      console.log(res);
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Sign Up</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="./images/Login.webp" alt="login image" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <form className="main_form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={user.name} placeholder="Your name" type="text" name="name" required />
                  </div>
                  <div className="col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={user.email} placeholder="Email" type="email" name="email" required />
                  </div>
                  <div className=" col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={user.phone} placeholder="Phone" type="text" name="phone" required />
                  </div>
                  <div className="position-relative col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={user.password} placeholder="Password" type={inputTypePass} name="password" required />
                    {showPass ? <FaEye className="text-dark position-absolute eye" onClick={toggleInputPass} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInputPass} />}
                  </div>
                  <div className="position-relative col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={user.confirmPassword} placeholder="Confirm Password" type={inputTypeConPass} name="confirmPassword" required />
                    {showConPass ? <FaEye className="text-dark position-absolute eye" onClick={toggleInputConPass} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInputConPass} />}
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="but rounded">SignUp</button>
                    <p className="text-center mt-3">Back to Login? <Link to="/login" style={{ color: "#ffc221" }}>Login</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp