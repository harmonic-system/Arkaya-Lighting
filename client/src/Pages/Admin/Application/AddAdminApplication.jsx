import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/Auth";
import Spinner from "../../../componants/Spinner/Spinner";
import { useAuthContext } from "../../../store/authContext";
import { useHome } from "../../../store/Product/Home";

const AddAdminApplication = () => {

    const [img, setImg] = useState("")
    const [application, setApplication] = useState({
        heading: "",
        about: ""
    })

    const { token, server } = useAuthContext()
    const { getAllApplications } = useHome()
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSpinner(true)

        try {
            const response = await fetch(`${server}/api/v1/adminapplication/addapplication`, {
                method: "POST",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    applicationfile: img,
                    heading: application.heading,
                    about: application.about
                })
            })


            if (response.ok) {
                setImg("")
                setApplication({
                    heading: "",
                    about: ""
                })
                const res = await response.json()
                toast.success(res.message)
                getAllApplications()
                setSpinner(false)
                navigate("/admin/application")

            }


        } catch (error) {
            toast.error("Failed to Add Application")
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
        setApplication({
            ...application,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Add Application</h2>
                <form className="main_form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handleImage} type="file" name="applicationfile" required />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={application.heading} placeholder="Application Heading" type="text" name="heading" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={application.about} placeholder="Application About" type="text" name="about" />
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

export default AddAdminApplication;