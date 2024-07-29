import { useEffect } from "react"
import { useCDI } from "../../../../store/Product/CDI"

const DMXControllers = () => {

    const { dmxControllers, getAllDmxControllersProducts } = useCDI()

    useEffect(() => {
        getAllDmxControllersProducts()
    }, [])


    return (
        <>
            <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>DMX Controllers Products</h2>
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
                                dmxControllers.map((product) => {
                                    // return <Link to="/productDetails" className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                    return <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-end-danger" key={product._id} >
                                    <div className="product-box row rounded">
                                        <h2 className="text-start" style={{ height: "100px" }}><b><big>{product.productname}</big></b></h2>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex proimgspec">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 proimgheight rect-imgheight" style={{ height: "250px" }}>
                                                <img src={product.productfile.url} className="w-100 p-0 m-auto rounded" />
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex align-items-center flex-column justify-content-start proimgheight" style={{ height: "300px" }}>
                                                <p className="text-dark fw-bold" ><b>Technical Parameters</b></p>
                                                <p className="message text-justify" >{product?.description?.spec1}</p>
                                                {/* <p className="message" >{product?.description?.spec2}</p>
                                                <p className="message" >{product?.description?.spec3}</p>
                                                <p className="message" >{product?.description?.spec4}</p>
                                                <p className="message" >{product?.description?.spec5}</p>
                                                <p className="message" >{product?.description?.spec6}</p>
                                                <p className="message" >{product?.description?.spec7}</p>
                                                <p className="message" >{product?.description?.spec8}</p>
                                                <p className="message" >{product?.description?.spec9}</p>
                                                <p className="message" >{product?.description?.spec10}</p> */}

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

export default DMXControllers


// The lighting controller adheres to the DMX512/1990 standard, providing a maximum of 1024 DMX control channels with an optically isolated signal output port. It can manage up to 120 computer lights or 120 channels for dimming and LED lamps. Utilizing the R20 light library mode, each lamp can be controlled with up to 42 channels. Featuring a property channel fader, it ensures easy fixture control. The controller supports storage for 300 replay programs divided into 30 pages and includes 40 direct selection scenes for simultaneous output overlay, ideal for live effects that can be controlled and latched. Built-in graphics facilitate user-controlled effects such as drawing, waves, aperture changes, and various brightness, overlay, deformation, and expansion effects. Program synchronization offers options for internal speed, external speed, or music synchronization control. It boasts a large screen LED display with a user-friendly Chinese/English menu interface and includes a USB data interface for U disk data backup and system upgrades. Optionally, it can be equipped with a professional gooseneck work light. Power requirements are AC100-240V 50/60Hz 15W, supported by a high-performance green switching power supply suitable for global standards. The controller's dimensions are 482x400x108mm.




