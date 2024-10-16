import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../../store/Auth";
import Spinner from "../../../../../../componants/Spinner/Spinner";
import { useAuthContext } from "../../../../../../store/authContext";

const AddAdminChandeliers = () => {

    const [img, setImg] = useState("")
    const [productname, setProductname] = useState("")
    const [model, setModel] = useState("")
    const [description, setDescription] = useState({
        spec1: "",
        spec2: "",
        spec3: "",
        spec4: "",
        spec5: "",
        spec6: "",
        spec7: "",
        spec8: "",
        spec9: "",
        spec10: "",
    })

    const { token, server } = useAuthContext()
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSpinner(true)

        try {
            const response = await fetch(`${server}/api/v1/lightingfixture/admindecorative/addchandeliers`, {
                method: "POST",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productfile: img,
                    productname: productname,
                    model: model,
                    spec1: description.spec1,
                    spec2: description.spec2,
                    spec3: description.spec3,
                    spec4: description.spec4,
                    spec5: description.spec5,
                    spec6: description.spec6,
                    spec7: description.spec7,
                    spec8: description.spec8,
                    spec9: description.spec9,
                    spec10: description.spec10,
                })
            })


            if (response.ok) {
                setImg("")
                setProductname("")
                setModel("")
                setDescription({
                    spec1: "",
                    spec2: "",
                    spec3: "",
                    spec4: "",
                    spec5: "",
                    spec6: "",
                    spec7: "",
                    spec8: "",
                    spec9: "",
                    spec10: "",
                })
                const res = await response.json()
                toast.success(res.message)
                setSpinner(false)
                navigate("/admin/chandeliers")

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
                <h2 className="fw-bold mb-3">Add Chandeliers Product</h2>
                <form className="main_form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" required />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={(e) => setProductname(e.target.value)} value={productname} placeholder="Product name" type="text" name="productname" required />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={(e) => setModel(e.target.value)} value={model} placeholder="Product Model" type="text" name="model" required />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec1} placeholder="Product Spec 1" type="text" name="spec1" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec2} placeholder="Product Spec 2" type="text" name="spec2" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec3} placeholder="Product Spec 3" type="text" name="spec3" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec4} placeholder="Product Spec 4" type="text" name="spec4" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec5} placeholder="Product Spec 5" type="text" name="spec5" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec6} placeholder="Product Spec 6" type="text" name="spec6" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec7} placeholder="Product Spec 7" type="text" name="spec7" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec8} placeholder="Product Spec 8" type="text" name="spec8" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec9} placeholder="Product Spec 9" type="text" name="spec9" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={description.spec10} placeholder="Product Spec 10" type="text" name="spec10" />
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

export default AddAdminChandeliers;