import BackButton from "../../../../../componants/BackButton";
import { useLightingFixtures } from "../../../../../store/Product/LightingFixture"
import { useEffect } from "react"

const Commercial = () => {

    const { commercial, getAllCommercialProducts } = useLightingFixtures()
    // console.log(commercial);


    useEffect(() => {
        getAllCommercialProducts()
    }, [])


    return (
        <>
            <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Commercial Products</h2>
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
                                commercial.map((product) => {
                                    // return <Link to="/productDetails" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                    return <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                        <div className="product-box row rounded">
                                            <h3 className="text-start" style={{ height: "100px" }}><b><big>{product.productname}</big></b></h3>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 proimgheight" style={{ height: "250px" }}>
                                                    <img src={product.productfile.url} className="w-100 p-0 m-auto h-100 rounded" />
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight prod-spec" style={{ height: "300px" }}>
                                                    {product?.description?.size ? <p className="message" ><strong>Size</strong>&ensp;-&ensp;{product?.description?.size}</p> : ""}
                                                    {product?.description?.shape ? <p className="message" ><strong>Shape</strong>&ensp;-&ensp;{product?.description?.shape}</p> : ""}
                                                    {product?.description?.installation ? <p className="message" ><strong>Installation</strong>&ensp;-&ensp;{product?.description?.installation}</p> : ""}
                                                    {product?.description?.direction ? <p className="message" ><strong>Direction</strong>&ensp;-&ensp;{product?.description?.direction}</p> : ""}
                                                    {product?.description?.power ? <p className="message" ><strong>Power</strong>&ensp;-&ensp;{product?.description?.power}</p> : ""}
                                                    {product?.description?.cri ? <p className="message" ><strong>CRI</strong>&ensp;-&ensp;{product?.description?.cri}</p> : ""}
                                                    {product?.description?.cct ? <p className="message" ><strong>CCT</strong>&ensp;-&ensp;{product?.description?.cct}</p> : ""}
                                                    {product?.description?.efficiency ? <p className="message" ><strong>Efficiency</strong>&ensp;-&ensp;{product?.description?.efficiency}</p> : ""}
                                                    {product?.description?.beamAngle ? <p className="message" ><strong>Beam Angle</strong>&ensp;-&ensp;{product?.description?.beamAngle}</p> : ""}
                                                    {product?.description?.housingColor ? <p className="message" ><strong>Housing Color</strong>&ensp;-&ensp;{product?.description?.housingColor}</p> : ""}
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <h3 className="text-start">{product.category}</h3>
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

export default Commercial




