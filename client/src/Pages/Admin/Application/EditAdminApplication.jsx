import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../../../store/Auth"
import Spinner from "../../../componants/Spinner/Spinner"

const EditAdminApplication = () => {

    const { id } = useParams()
    // console.log(id);
    const { authorizationToken, server } = useAuth()
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)


    const [img, setImg] = useState("")
    const [imgpublicid, setImgPublicId] = useState("")
    const [application, setApplication] = useState({
        heading: "",
        about: ""
    })

    const getSingleApplication = async (id) => {
        const response = await fetch(`${server}/api/v1/adminapplication/getsingalapplication/${id}`, {
            method: "GET",
            headers: {
                "Authorization": authorizationToken
            }
        })
        const singleApplication = await response.json()
        // console.log(singleApplication)
        if (singleApplication) {
            setImg(singleApplication.productfile.url)
            setImgPublicId(singleApplication.productfile.public_id)
            setApplication({
                heading: singleApplication.heading,
                about: singleApplication.about
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
            const response = await fetch(`${server}/api/v1/adminapplication/editapplication/${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": authorizationToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    applicationfile: img,
                    imgpublicid: imgpublicid,
                    heading: application.heading,
                    about: application.about,
                })
            })


            if (response.ok) {
                setImg("")
                setImgPublicId("")
                setApplication({
                    heading: "",
                    about: ""
                })
                const res = await response.json()
                // console.log(res);
                toast.success(res.message)
                setSpinner(false)
                navigate("/admin/application")

            }

        } catch (error) {
            toast.error("Failed to Update Application")
        }
    }

    const handlechange = (e) => {
        setApplication({
            ...application,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        getSingleApplication(id)
    }, [])





    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-3">Edit Application</h2>
                <form className="main_form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={application.heading} placeholder="Application Heading" type="text" name="heading" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input className="form-control rounded" onChange={handlechange} value={application.about} placeholder="Application About" type="text" name="about" />
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

export default EditAdminApplication;