import { Link } from "react-router-dom"

const Architecture = () => {
  return (
    <>
      <div className="products-image">
        <div className="container">
          <div className="row">
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/Commercials.png" />
                <h3>Commercials</h3>
              </div>
            </Link>
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/Dynamicfacade.jpg" />
                <h3>Dynamic Facade</h3>
              </div>
            </Link>
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/Landscapes.jpg" />
                <h3>Landscapes</h3>
              </div>
            </Link>
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/museums.jpg" />
                <h3>Museums</h3>
              </div>
            </Link>
            <Link to="/" className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="products-image-box">
                <img src="images/products/Architecture/residentials.avif" />
                <h3>Residentials</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Architecture