import { Link } from "react-router-dom";

const Entertainment = () => {
  return (
    <>
      <div className="products-image">
        <div className="container">
          <div className="row">
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/mhslamp.png" />
                <h3>Moving Head Series - Lamp</h3>
              </div>
            </Link>
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/mhsled.jpg" />
                <h3>Moving Head Series - LED</h3>
              </div>
            </Link>
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/staticled.avif" />
                <h3>Static LED</h3>
              </div>
            </Link>
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Entertainment/effectslight.avif" />
                <h3>Effects Light</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Entertainment;