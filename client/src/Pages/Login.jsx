import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useAuth } from "../store/Auth";
const server = import.meta.env.VITE_SERVER;
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { storeTokenInLocalStorage } = useAuth()
  const navigate = useNavigate()
  const [show, setShow] = useState(true)
  const [inputType, setInputType] = useState("password")


  const toggleInput = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"))
    setShow((pre) => !pre)
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
      const response = await fetch(`${server}api/v1/auth/login`, {
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
      console.log(error.message);
    }
  }


  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Login</h2>
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
                    <input className="form-control rounded" onChange={handleChange} value={user.email} placeholder="Email" type="email" name="email" required />
                  </div>
                  <p className="text-end"><Link to="" className="text-primary" >Forget Password</Link></p>
                  <div className="position-relative col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={user.password} placeholder="Password" type={inputType} name="password" required />
                    {show ? <FaEye className="text-dark position-absolute eye" onClick={toggleInput} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInput} />}
                  </div>
                  <div className=" col-md-12">
                    <button type="submit" className="but rounded">Login</button>
                    <p className="text-center mt-3">Not a User? <Link to="/signup" style={{color:"#ffc221"}}>SignUp</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Done */}
    </>
  )
}

export default Login