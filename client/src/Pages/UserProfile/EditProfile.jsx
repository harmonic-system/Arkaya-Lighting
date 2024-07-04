import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../store/Auth";

const EditProfile = () => {

  const { storeTokenInLocalStorage, authorizationToken, user, server } = useAuth()

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })
  const [details, setDetails] = useState(true)

  if (user && details) {
    setUserDetails({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: "",
      confirmPassword: ""
    })
    setDetails(false)
  }

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

    setUserDetails({
      ...userDetails,
      [name]: value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${server}/api/v1/auth/edit/${user._id}`, {
        method: "POST",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
      })

      const res = await response.json()

      if (response.ok) {
        setUserDetails({
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
      {/* Add form for editing user profile */}
      {/* Use Formik and Yup for form validation */}
      {/* Handle form submission and update user profile */}

      {/* Display success or error messages */}

      {/* Redirect to user profile page */}

      <div className="contact mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <form className="main_form" onSubmit={handleSubmit} >
                <div className="row">
                  <div className="col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={userDetails.name} placeholder="Your name" type="text" name="name" />
                  </div>
                  <div className="col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={userDetails.email} placeholder="Email" type="email" name="email" />
                  </div>
                  <div className=" col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={userDetails.phone} placeholder="Phone" type="text" name="phone" />
                  </div>
                  <div className="position-relative col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={userDetails.password} placeholder="Password" type={inputTypePass} name="password" />
                    {showPass ? <FaEye className="text-dark position-absolute eye" onClick={toggleInputPass} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInputPass} />}
                  </div>
                  <div className="position-relative col-md-12">
                    <input className="form-control rounded" onChange={handleChange} value={userDetails.confirmPassword} placeholder="Confirm Password" type={inputTypeConPass} name="confirmPassword" />
                    {showConPass ? <FaEye className="text-dark position-absolute eye" onClick={toggleInputConPass} /> : <FaEyeSlash className="text-dark position-absolute eye" onClick={toggleInputConPass} />}
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="but rounded">Update</button>
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

export default EditProfile;
