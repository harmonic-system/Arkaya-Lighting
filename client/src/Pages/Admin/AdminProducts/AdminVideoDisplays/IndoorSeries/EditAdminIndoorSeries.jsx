import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../../../../../store/Auth"
import Spinner from "../../../../../componants/Spinner/Spinner"
import { useAuthContext } from "../../../../../store/authContext"

const EditAdminIndoorSeries = () => {

    const { id } = useParams()
    // console.log(id);
    const { token, server } = useAuthContext()
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)


    const [img, setImg] = useState("")
    const [imgpublicid, setImgPublicId] = useState("")
    const [productname, setProductname] = useState("")
    const [model, setModel] = useState("")
    const [description, setDescription] = useState({
        moduleSize: "",
        pixelPitch: "",
        pixelDensity: "",
        configuration: "",
        mode: "",
        resolution: "",
        driveType: "",
        refFreq: "",
        scanMode: "",
        portType: "",
        brigthness: "",
        renFix: "",
    })

    const getSingleProduct = async (id) => {
        const response = await fetch(`${server}/api/v1/videodisplays/adminindoorseries/getsingalindoorseries/${id}`, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        })
        const singleProduct = await response.json()
        // console.log(singleProduct)
        if (singleProduct) {
            setImg(singleProduct.productfile.url)
            setImgPublicId(singleProduct.productfile.public_id)
            setProductname(singleProduct.productname)
            setModel(singleProduct.model)
            setDescription({
                moduleSize: singleProduct.description.moduleSize,
                pixelPitch: singleProduct.description.pixelPitch,
                pixelDensity: singleProduct.description.pixelDensity,
                configuration: singleProduct.description.configuration,
                mode: singleProduct.description.mode,
                resolution: singleProduct.description.resolution,
                driveType: singleProduct.description.driveType,
                refFreq: singleProduct.description.refFreq,
                scanMode: singleProduct.description.scanMode,
                portType: singleProduct.description.portType,
                brigthness: singleProduct.description.brigthness,
                renFix: singleProduct.description.renFix,
            })
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        transforFile(file)
    }

    const transforFile = (file) => {
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImg(reader.result);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSpinner(true)

        try {
            const response = await fetch(`${server}/api/v1/videodisplays/adminindoorseries/updateindoorseries/${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productfile: img,
                    productname: productname,
                    model: model,
                    moduleSize: description.moduleSize,
                    pixelPitch: description.pixelPitch,
                    pixelDensity: description.pixelDensity,
                    configuration: description.configuration,
                    mode: description.mode,
                    resolution: description.resolution,
                    driveType: description.driveType,
                    refFreq: description.refFreq,
                    scanMode: description.scanMode,
                    portType: description.portType,
                    brigthness: description.brigthness,
                    renFix: description.renFix,
                })
            })


            if (response.ok) {
                setImg("")
                setImgPublicId("")
                setProductname("")
                setModel("")
                setDescription({
                    moduleSize: "",
                    pixelPitch: "",
                    pixelDensity: "",
                    configuration: "",
                    mode: "",
                    resolution: "",
                    driveType: "",
                    refFreq: "",
                    scanMode: "",
                    portType: "",
                    brigthness: "",
                    renFix: "",
                })
                const res = await response.json()
                // console.log(res);
                toast.success(res.message)
                setSpinner(false)
                navigate("/admin/indoorseries")

            }

        } catch (error) {
            toast.error("Failed to Update Product")
        }
    }

    const handlechange = (e) => {
        setDescription({
            ...description,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        getSingleProduct(id)
    }, [])





    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Edit Indoor Product</h2>
                <form className="main_form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={(e) => setProductname(e.target.value)} value={productname} placeholder="Product name" type="text" name="productname" required />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={(e) => setModel(e.target.value)} value={model} placeholder="Product Model" type="text" name="model" required />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.moduleSize} placeholder="Module Size" type="text" name="moduleSize" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.pixelPitch} placeholder="Pixel Pitch" type="text" name="pixelPitch" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.pixelDensity} placeholder="Pixel Density" type="text" name="pixelDensity" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.configuration} placeholder="Configuration" type="text" name="configuration" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.mode} placeholder="Mode" type="text" name="mode" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.resolution} placeholder="Resolution" type="text" name="resolution" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.driveType} placeholder="Drive Type" type="text" name="driveType" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.refFreq} placeholder="Refference Frequency" type="text" name="refFreq" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.scanMode} placeholder="Scan Mode" type="text" name="scanMode" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.portType} placeholder="Port Type" type="text" name="portType" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.brigthness} placeholder="Brigthness" type="text" name="brigthness" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.renFix} placeholder="Rental / Fixed" type="text" name="renFix" />
                        </div>
                        <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <button type="submit" className="but rounded">Update</button>
                        </div>
                    </div>
                </form>
                {spinner ? <Spinner /> : ""}
            </div>
        </>
    )
}

export default EditAdminIndoorSeries;