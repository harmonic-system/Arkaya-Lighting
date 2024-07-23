import { useEffect } from "react";
import { useAuth } from "../store/Auth";

const Application = () => {

  const { application, getAllApplications } = useAuth()

  useEffect(() => {
    getAllApplications()
  }, [])


  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Application</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="application-image mb-5">
        <div className="container">
          <div className="row">

            {
              application.map((application) => {
                return <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={application._id}>
                  <div className="application-image-box">
                    <img src={application.applicationfile.url} />
                    <h3>{application.heading}</h3>
                    <span><small className="text-secondary">{application.about}</small></span>
                  </div>
                </div>
              })
            }
            
            {
              application.map((application) => {
                return <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={application._id}>
                  <div className="application-image-box">
                    <img src={application.applicationfile.url} />
                    <h3>{application.heading}</h3>
                    <span><small className="text-secondary">{application.about}</small></span>
                  </div>
                </div>
              })
            }

          </div>
        </div>
      </div>

    </>
  )
}

export default Application;