import { Link } from "react-router-dom"
import { useAuth } from "../../../store/Auth"
import { useEffect } from "react"

const InteriorProducts = () => {

  const {interiorProducts, getAllInteriorProducts} = useAuth()

  useEffect(() => {
    getAllInteriorProducts()
  }, [])

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

            {
                interiorProducts.map((product) => {
                  // return <Link to="/productDetails" className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id} >
                  return <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id} >
                    <div className="product-box">
                      <i><img src={product.productfile.url} /></i>
                      <h3>{product.productname}</h3>
                      <span><small className="text-secondary"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, eveniet.</small></small></span>
                    </div>
                  </div>
                  {/* </Link> */ }
                })
              }


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InteriorProducts




