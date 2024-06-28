import { useState } from "react"
import { toast } from "react-toastify"
import { useAuth } from "../../../../store/Auth";
import { useNavigate } from "react-router-dom";
const server = import.meta.env.VITE_SERVER;

const AddAdminHomeCarousel = () => {

  const [img, setImg] = useState("")
  const [heading, setHeading] = useState("")
  const [des, setDes] = useState("")

  const { authorizationToken, getAllHomeCarousel } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${server}api/v1/adminhomecontent/addhomecarousel`, {
        method: "POST",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: img,
          heading: heading,
          description: des,
        })
      })


      if (response.ok) {
        setImg("")
        setHeading("")
        setDes("")
        toast.success("Home Carousel Added Successfully")
        getAllHomeCarousel()
        navigate("/admin_carousel")

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

  return (
    <>
      <div className="container my-5">
        <form className="main_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleImage} type="file" name="file" required />
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
      </div>
    </>
  )
}

export default AddAdminHomeCarousel;