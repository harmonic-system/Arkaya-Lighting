import { Link } from "react-router-dom"

const InteriorProducts = () => {
  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Interior Lights</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-bg">
        <div className="product-bg-white">
          <div className="container">
            <div className="row">

              <Link to="/productDetails" className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="product-box">
                  <i><img src="icon/p1.png" /></i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </Link>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InteriorProducts




