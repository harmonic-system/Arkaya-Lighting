import { useLightingFixtures } from "../../../../../store/Product/LightingFixture"
import { useEffect } from "react"

const Chandeliers = () => {

    const { chandeliers, getAllChandeliersProducts } = useLightingFixtures()

    useEffect(() => {
        getAllChandeliersProducts()
    }, [])


    return (
        <>
            <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Chandeliers Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-bg">
                <div className="product-bg-white">
                    <div className="container-product">
                        <div className="row">
                            {
                                chandeliers.map((product) => {
                                    // return <Link to="/productDetails" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                    return <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                        <div className="product-box row">
                                            <h2 className="text-start"><b><big>{product.productname}</big></b></h2>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 proimgheight">
                                                    <img src={product.productfile.url} className="w-100 p-0 m-auto h-100" />
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight">
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

export default Chandeliers




