import { Link } from "react-router-dom"
import { useAuth } from "../../../store/Auth"
import { useEffect } from "react"

const ExteriorProducts = () => {

  const { exteriorProducts, getAllExteriorProducts } = useAuth()

  useEffect(() => {
    getAllExteriorProducts()
  }, [])

  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Exterior Lights</h2>
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
                exteriorProducts.map((product) => {
                  // return <Link to="/productDetails" className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id} >
                  // return <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={product._id} >
                  //   <div className="product-box">
                  //     <i><img src={product.productfile.url} /></i>
                  //     <h3>{product.productname}</h3>
                  //     <span><small className="text-secondary"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, eveniet.</small></small></span>
                  //   </div>
                  // </div>
                  {/* </Link> */ }
                  return <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 border-end-danger" key={product._id} >
                    <div className="product-box row">
                      <h2 className="text-start"><b><big>{product.model}</big></b></h2>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 proimgheight" style={{ height: "320px" }}>
                          <img src={product.productfile.url} className="w-100 p-0 m-auto h-100" />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight" style={{ height: "320px" }}>
                          {/* <h4 className="text-start">{product.description.des}</h4> */}
                          <p>{product?.description?.size}</p>
                          <p>{product?.description?.power}</p>
                          <p>{product?.description?.workingElectricity}</p>
                          <p>{product?.description?.controlMode}</p>
                          <p>{product?.description?.scheme}</p>
                          <p>{product?.description?.lampBeads}</p>
                          <p>{product?.description?.IPGrade}</p>
                          <p>{product?.description?.masterStroke}</p>
                          <p>{product?.description?.returnRoute}</p>
                          <p>{product?.description?.distanceFromCenter}</p>
                          <p>{product?.description?.lampshellFaceColor}</p>
                          <p>{product?.description?.noOfLight}</p>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 className="text-start">{product.productname}</h3>
                      </div>
                    </div>
                  </div>
                })
              }


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExteriorProducts




