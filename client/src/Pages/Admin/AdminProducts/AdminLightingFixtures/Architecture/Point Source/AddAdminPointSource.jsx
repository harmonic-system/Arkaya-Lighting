import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../../store/Auth";
import Spinner from "../../../../../../componants/Spinner/Spinner";
import { useAuthContext } from "../../../../../../store/authContext";

const AddAdminPointSource = () => {

    const [img, setImg] = useState("")
    const [productname, setProductname] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState({
        size: "",
        shape: "",
        installation: "",
        direction: "",
        power: "",
        leds: "",
        cri: "",
        cct: "",
        efficiency: "",
        beamAngle: "",
        housingColor: ""
    })

    const { token, server } = useAuthContext()
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSpinner(true)
        // console.log(img,productname,category,description);


        try {
            const response = await fetch(`${server}/api/v1/lightingfixture/adminarchitecture/addpointsource`, {
                method: "POST",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productfile: img,
                    productname: productname,
                    category: category,
                    size: description.size,
                    shape: description.shape,
                    installation: description.installation,
                    direction: description.direction,
                    power: description.power,
                    leds: description.leds,
                    cri: description.cri,
                    cct: description.cct,
                    efficiency: description.efficiency,
                    beamAngle: description.beamAngle,
                    housingColor: description.housingColor
                })
            })


            if (response.ok) {
                setImg("")
                setProductname("")
                setCategory("")
                setDescription({
                    size: "",
                    shape: "",
                    installation: "",
                    direction: "",
                    power: "",
                    leds: "",
                    cri: "",
                    cct: "",
                    efficiency: "",
                    beamAngle: "",
                    housingColor: ""
                })
                const res = await response.json()
                toast.success(res.message)
                setSpinner(false)
                navigate("/admin/pointsource")

            }


        } catch (error) {
            toast.error("Failed to Add Product")
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

    const handlechange = (e) => {
        setDescription({
            ...description,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Add Point Source Product</h2>
                <form className="main_form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" required />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={(e) => setProductname(e.target.value)} value={productname} placeholder="Product name" type="text" name="productname" required />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={(e) => setCategory(e.target.value)} value={category} placeholder="Product Category" type="text" name="category" required />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.size} placeholder="Size" type="text" name="size" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.shape} placeholder="Shape" type="text" name="shape" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.installation} placeholder="Installation" type="text" name="installation" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.direction} placeholder="Direction" type="text" name="direction" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.power} placeholder="Power" type="text" name="power" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.leds} placeholder="Leds" type="text" name="leds" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.cri} placeholder="CRI" type="text" name="cri" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.cct} placeholder="CCT" type="text" name="cct" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.efficiency} placeholder="Efficiency" type="text" name="efficiency" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.beamAngle} placeholder="Beam Angle" type="text" name="beamAngle" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.housingColor} placeholder="Housing Color" type="text" name="housingColor" />
                        </div>
                        <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <button type="submit" className="but rounded">Add</button>
                        </div>
                    </div>
                </form>
                {spinner ? <Spinner /> : ""}
            </div>
        </>
    )
}

export default AddAdminPointSource;