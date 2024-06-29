import { Link } from "react-router-dom"
import { useAuth } from "../../../store/Auth"
import { useEffect } from "react"
import Shimmer from "../../../componants/Shimmer/Shimmer"

const LedStripProducts = () => {

  const { ledstripProducts, getAllLEDStripProducts } = useAuth()

  useEffect(() => {
    getAllLEDStripProducts()
  }, [])

  return ledstripProducts.length === 0 ? <Shimmer /> : (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>LED Strips</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-bg">
        <div className="product-bg-white">
          <div className="container">
            <div className="row d-flex justify-content-around align-items-center">

              {
                ledstripProducts.map((product) => {
                  // return <Link to="/productDetails" className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id} >
                  // return <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id} >
                  //   <div className="product-box">
                  //     <h2>Model Number</h2>
                  //     <i><img src={product.productfile.url} /></i>
                  //     <h3>{product.productname}</h3>
                  //     <span><small className="text-secondary"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, eveniet.</small></small></span>
                  //   </div>
                  // </div>

                  return <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 border-end-danger" key={product._id} >
                    <div className="product-box row">
                      <h2 className="text-start"><b><big>{product.model}</big></b></h2>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 proimgheight" style={{ height: "280px" }}>
                          <img src={product.productfile.url} className="w-100 p-0 m-auto h-100" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight" style={{ height: "280px" }}>
                          <h4 className="text-start">{product.description.des}</h4>
                          <p>{product.description.spec1}</p>
                          <p>{product.description.spec2}</p>
                          <p>{product.description.spec3}</p>
                          <p>{product.description.spec4}</p>
                          <p>{product.description.spec5}</p>
                          <p>{product.description.spec6}</p>
                          <p>{product.description.spec7}</p>
                          <p>{product.description.spec8}</p>
                          <p>{product.description.spec9}</p>
                          <p>{product.description.spec10}</p>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 className="text-start">{product.productname}</h3>
                      </div>
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

export default LedStripProducts




