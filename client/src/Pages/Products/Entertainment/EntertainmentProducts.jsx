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
                      <i className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img src={product.productfile.url} className="w-100 p-0" />
                        {/* <h3 className="text-start">{product.productname}</h3> */}
                      </i>
                      <i className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex align-items-center">
                        <p>{product.description}</p>
                        {/* <p>4 powerful 100W COB LEDs Molefys  in either white or warm white to deliver a bright and even light output. The beam angle of 120° ensures wide coverage. Control is made simple with multiple modes (Auto, Master-slave, DMX512) and a variety of channel options (1, 2, 4, or 8 channels). Despite its impressive features, this fixture remains compact (42 x 25.5 x 42cm) and lightweight (9.8kg) for easy setup. A frost film is included to further diffuse the light and create a softer effect</p> */}
                      </i>
                      <i className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 className="text-start">{product.productname}</h3>
                      </i>
                      {/* <span><small className="text-secondary"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, eveniet.</small></small></span> */}
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




