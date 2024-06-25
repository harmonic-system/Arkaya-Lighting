import { useState } from "react"
import { toast } from "react-toastify"
import { useAuth } from "../store/Auth";
const server = import.meta.env.VITE_SERVER;

const Contact = () => {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  })

  const [sent, setSent] = useState(false)
  const { user } = useAuth()
  const [userDetails, setUserDetails] = useState(true)

  if (user && userDetails) {
    setContactData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      organization: "",
      message: ""
    })
    setUserDetails(false)
  }


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setContactData({
      ...contactData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const response = await fetch(`${server}api/v1/contact/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData)
      })

      if (response.ok) {
        setContactData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          message: ""
        })
        setSent(true)
      }
      const contact_res = await response.json()
      toast.success(contact_res.message)

    } catch (error) {
      toast.error("Something went wrong")
    }
  }


  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              {sent ? <p className="text-center text-success fw-bold">Thanks For Contacting In Arkaya Lighting !!! Our Executive Will Contact You Soon.</p> : ""}
              <form className="main_form" onSubmit={handleSubmit} >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input className="form-control" onChange={handleChange} value={contactData.name} placeholder="Your name" type="text" name="name" required />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input className="form-control" onChange={handleChange} value={contactData.email} placeholder="Email" type="text" name="email" required />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input className="form-control" onChange={handleChange} value={contactData.phone} placeholder="Phone" type="text" name="phone" required />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input className="form-control" onChange={handleChange} value={contactData.organization} placeholder="Organization Name (optinal)" type="text" name="organization" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea" onChange={handleChange} value={contactData.message} placeholder="Message" name="message" required></textarea>
                  </div>
                  <div className=" col-md-12">
                    <button type="submit" className="but">Send</button>
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

export default Contact