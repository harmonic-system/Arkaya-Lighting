import Breadcrumb from "../../../../../componants/Breadcrumb/Breadcrumb"
import { useLightingFixtures } from "../../../../../store/Product/LightingFixture"
import { useEffect } from "react"

const MovingHeadSeriesLamp = () => {

    const { movingHeadSeriesLamp, getAllMovingHeadSeriesLampProducts } = useLightingFixtures()

    useEffect(() => {
        getAllMovingHeadSeriesLampProducts()
    }, [])


    return (
        <>
            {/* <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Moving Head Series Lamp Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Breadcrumb first={"Products"} second={"/Lighting Fixtures"} third={"/Entertainment"} last={"/Moving Head Series Lamp"} />

            <div className="product-bg">
                <div className="product-bg-white">
                    <div className="container-product">
                        <div className="row">
                            {
                                movingHeadSeriesLamp.map((product) => {
                                    // return <Link to="/productDetails" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                    return <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                        <div className="product-box row rounded">
                                            <h3 className="text-start"><b><big>{product.productname}</big></b></h3>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 proimgheight" style={{ height: "250px" }}>
                                                    <img src={product.productfile.url} className="w-100 p-0 m-auto h-100 rounded" />
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight" style={{ height: "300px" }}>
                                                    <p className="message" >{product?.description?.spec1}</p>
                                                    <p className="message" >{product?.description?.spec2}</p>
                                                    <p className="message" >{product?.description?.spec3}</p>
                                                    <p className="message" >{product?.description?.spec4}</p>
                                                    <p className="message" >{product?.description?.spec5}</p>
                                                    <p className="message" >{product?.description?.spec6}</p>
                                                    <p className="message" >{product?.description?.spec7}</p>
                                                    <p className="message" >{product?.description?.spec8}</p>
                                                    <p className="message" >{product?.description?.spec9}</p>
                                                    <p className="message" >{product?.description?.spec10}</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <h3 className="text-start">{product.model}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </Link> */ }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MovingHeadSeriesLamp




