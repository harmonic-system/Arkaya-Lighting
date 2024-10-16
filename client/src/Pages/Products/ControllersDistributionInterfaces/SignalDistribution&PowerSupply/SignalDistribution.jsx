import { useEffect } from "react"
import { useCDI } from "../../../../store/Product/CDI"
import BackButton from "../../../../componants/BackButton"

const SignalDistribution = () => {

    const { signalDistribution, getAllSignalDistributionProducts } = useCDI()

    useEffect(() => {
        getAllSignalDistributionProducts()
    }, [])


    return (
        <>
            <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Signal Distribution Products</h2>
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
                                signalDistribution.map((product) => {
                                    // return <Link to="/productDetails" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                    return <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                        <div className="product-box row rounded">
                                            <h3 className="text-start" style={{ height: "100px" }}><b><big>{product.productname}</big></b></h3>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 proimgheight rect-imgheight d-flex justify-content-center align-content-center" style={{ height: "200px" }}>
                                                    <img src={product.productfile.url} className="w-100 p-0 m-auto rounded" />
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight prod-spec" style={{ height: "280px" }}>
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

export default SignalDistribution




