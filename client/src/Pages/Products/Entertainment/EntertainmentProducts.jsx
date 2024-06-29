import { Link } from "react-router-dom"
import { useAuth } from "../../../store/Auth"
import { useEffect } from "react"

const EntertainmentProducts = () => {

  const { entertainmentProducts, getAllEntertainmentProducts } = useAuth()

  useEffect(() => {
    getAllEntertainmentProducts()
  }, [])

  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Entertainment Products</h2>
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
                entertainmentProducts.map((product) => {
                  // return <Link to="/productDetails" className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id} >
                  return <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={product._id} >
                    <div className="product-box row">
                      <h2 className="text-start"><b><big>{product.category}</big></b></h2>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                          <img src={product.productfile.url} className="w-100 p-0 h-100" />
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12 mt-5">
                          <p>{product.description}</p>
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

export default EntertainmentProducts




