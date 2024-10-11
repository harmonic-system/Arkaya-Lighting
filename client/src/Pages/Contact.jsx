import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useAuthContext } from "../store/authContext";

const Contact = () => {

  const { user, server } = useAuthContext()
  const [sent, setSent] = useState(false)

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  })

  useEffect(()=>{
    if(user){
      setContactData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        organization: user.organization,
        message: ""
      })
    }
  },[user])

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
      const response = await fetch(`${server}/api/v1/contact/form`, {
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
          <div className="row p-4">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="contact-box bg-secondary-subtle rounded">
                <a href=""><IoLocationSharp className="fs-1" /></a>
                <h6>Address</h6>
                <p className="text-justify" >B-22 Patpar Ganj, Mayur Vihar Phase-1, New Delhi</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="contact-box bg-secondary-subtle rounded">
                    <a href="mailto:arkayalighting@gmail.com"><MdAlternateEmail className="fs-1" /></a>
                    <h6>Email Us</h6>
                    <p className="text-justify" >arkayalighting@gmail.com</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="contact-box bg-secondary-subtle rounded">
                    <a href="tel:+912255889966"><IoCall className="fs-1" /></a>
                    <h6>Call Us</h6>
                    <p className="text-justify" >+919654612012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4165.4041084832525!2d77.29098297421945!3d28.609573683583765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4a1884cbfab%3A0x8810b5d4314352bb!2sBank%20Of%20Baroda!5e0!3m2!1sen!2sin!4v1720175271137!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">

              {sent ? <p className="text-center text-success fw-bold">Thanks For Contacting In Arkaya Lighting !!! Our Executive Will Contact You Soon.</p> : ""}
              <form className="main_form" onSubmit={handleSubmit} >
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control rounded" onChange={handleChange} value={contactData.name} placeholder="Your name" type="text" name="name" required />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control rounded" onChange={handleChange} value={contactData.email} placeholder="Email" type="text" name="email" required />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control rounded" onChange={handleChange} value={contactData.phone} placeholder="Phone" type="text" name="phone" required />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control rounded" onChange={handleChange} value={contactData.organization} placeholder="Organization Name (optinal)" type="text" name="organization" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea rounded" onChange={handleChange} value={contactData.message} placeholder="Message" name="message" required></textarea>
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