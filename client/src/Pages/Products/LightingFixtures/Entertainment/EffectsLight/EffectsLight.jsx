import BackButton from "../../../../../componants/BackButton"
import { useLightingFixtures } from "../../../../../store/Product/LightingFixture"
import { useEffect } from "react"

const EffectsLight = () => {

    const { effectlight, getAllEffectsLightProducts } = useLightingFixtures()

    useEffect(() => {
        getAllEffectsLightProducts()
    }, [])


    return (
        <>
            <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Effects Light Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-bg">
                <div className="product-bg-white">
                    <div className="container-product">
                        <BackButton />
                        <div className="row">
                            {
                                effectlight.map((product) => {
                                    // return <Link to="/productDetails" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                    return <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                        <div className="product-box row rounded">
                                            <h2 className="text-start" style={{ height: "100px" }}><b><big>{product.productname}</big></b></h2>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 proimgheight rect-imgheight" style={{ height: "250px" }}>
                                                    <img src={product.productfile.url} className="w-100 p-0 m-auto h-100 rounded" />
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight prod-spec" style={{ height: "300px" }}>
                                                    <p className="text-dark fw-bold" ><b>Technical Parameters</b></p>
                                                    <p className="message text-justify" >{product?.description?.spec1}</p>
                                                    {/* <p className="message" ><b>Model Size</b>&emsp;{product?.description?.moduleSize}</p>
                                                    <p className="message" ><b>Pixel Pitch</b>&emsp;{product?.description?.pixelPitch}</p>
                                                    <p className="message" ><b>Pixels Density</b>&emsp;{product?.description?.pixelDensity}</p>
                                                    <p className="message" ><b>Pixel Configuration</b>&emsp;{product?.description?.configuration}</p>
                                                    <p className="message" ><b>Package Mode</b>&emsp;{product?.description?.mode}</p>
                                                    <p className="message" ><b>Pixel Resolution</b>&emsp;{product?.description?.resolution}</p>
                                                    <p className="message" ><b>Drive Type</b>&emsp;{product?.description?.driveType}</p>
                                                    <p className="message" ><b>Refresh Frequency</b>&emsp;{product?.description?.refFreq}</p>
                                                    <p className="message" ><b>Scan Mode</b>&emsp;{product?.description?.scanMode}</p>
                                                    <p className="message" ><b>Port Type</b>&emsp;{product?.description?.portType}</p>
                                                    <p className="message" ><b>Brigthness Of White Balance</b>&emsp;{product?.description?.brigthness}</p> */}

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

export default EffectsLight

// https://res.cloudinary.com/arkayalighting/image/upload/v1722062415/arkayalighting/products/lightingfixture/entertainment/effectlight/pejuwhsrl7dkageukpeb.jpg




