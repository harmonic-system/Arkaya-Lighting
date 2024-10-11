import { useEffect, useState } from "react"
import { useAuth } from "../../../../store/Auth"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../../../../componants/Spinner/Spinner"
import { useAuthContext } from "../../../../store/authContext"

const EditAdminHomeCarousel = () => {

  const { id } = useParams()
  const [img, setImg] = useState("")
  const [heading, setHeading] = useState("")
  const [des, setDes] = useState("")
  const [imgpublicid, setImgPublicId] = useState("")

  const { token, server } = useAuthContext()
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)

  const getsingalhomecarousel = async (id) => {
    const response = await fetch(`${server}/api/v1/adminhomecontent/getsingalhomecarousel/${id}`, {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    // console.log(response);
    const singlehomecarousel = await response.json()
    // console.log(singlehomecarousel);
    if (singlehomecarousel) {
      setImg(singlehomecarousel.file.url)
      setImgPublicId(singlehomecarousel.file.public_id)
      setHeading(singlehomecarousel.heading)
      setDes(singlehomecarousel.description)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setSpinner(true)

    try {
      const response = await fetch(`${server}/api/v1/adminhomecontent/edithomecarousel/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: img,
          imgpublicid: imgpublicid,
          heading: heading,
          description: des,
        })
      })


      if (response.ok) {
        setImg("")
        setImgPublicId("")
        setHeading("")
        setDes("")
        setSpinner(false)
        toast.success("Home Carousel Updated Successfully")
        navigate("/admin/homecarousel")

      }


    } catch (error) {
      toast.error("Failed to Add Home Carousel")
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

  useEffect(() => {
    getsingalhomecarousel(id)
  }, [])


  return (
    <>
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Edit Home Carousel</h2>
        <form className="main_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleImage} type="file" name="file" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setHeading(e.target.value)} value={heading} placeholder="Heading" type="text" name="heading" required />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setDes(e.target.value)} value={des} placeholder="Description" type="text" name="description" required />
            </div>
            <div className=" col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <button type="submit" className="but rounded">Add</button>
            </div>
          </div>
        </form>
        {spinner ? <Spinner /> : ""}
      </div>
    </>
  )
}

export default EditAdminHomeCarousel;