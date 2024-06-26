import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import { useState } from "react";

const UserProfile = () => {

  const { user } = useAuth()

  const [details, setDetails] = useState(true)

  const [profileDetails, setProfileDetails] = useState({
    name: "",
    email: "",
    phone: "",
  })

  if (user && details) {
    setProfileDetails({
      name: user.name,
      email: user.email,
      phone: user.phone,
    })
    setDetails(false)
  }


  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>{profileDetails.name} Profile</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <form className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input className="form-control rounded" value={profileDetails.name} placeholder="Your name" type="text" name="name" required readOnly />
                  </div>
                  <div className="col-md-12">
                    <input className="form-control rounded" value={profileDetails.email} placeholder="Email" type="email" name="email" required readOnly />
                  </div>
                  <div className=" col-md-12">
                    <input className="form-control rounded" value={profileDetails.phone} placeholder="Phone" type="text" name="phone" required readOnly />
                  </div>
                  {/* <div className=" col-md-12">
                    <Link to="/editprofile" className="but rounded text-center">Edit Profile</Link>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Outlet />


    </>
  )
}

export default UserProfile;