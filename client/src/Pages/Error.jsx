import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      {/* <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Error</h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container">
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
      </div> */}
      <div className="container" style={{ height: "80vh" }}>
        <div className="d-flex justify-content-center align-items-start flex-column h-100">
          <h1>It looks like the URL you entered is incorrect or the page may have been moved.</h1>

          <p className="fs-5" style={{ fontFamily: "cursive" }}>Please check the URL and try again. If you need help, feel free to <Link to="/contact"><span className="text-warning">contact us</span></Link> or return to our<Link to="/"><span className="text-warning"> homepage.</span></Link> </p>
        </div>
      </div>
    </>
  )
}

export default Error