import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Error</h2>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container">
        <div className="row mt-2">
          <div className="col-md-8 offset-md-2">
            <div className="title">
              <h2>404 Page Not Found</h2>
              <span>It's look like the page you are trying to reach that's not exist.</span>
            </div>
          </div>
        </div>

        <div className="yellow_bg mt-0">
          <div className="row d-flex justify-content-center align-content-center">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 text-center">
              <Link className="rounded py-2 px-4 bg-dark text-light" to="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error