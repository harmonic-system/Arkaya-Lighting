import { useState } from "react"
import { useAuth } from "../../../../../../store/Auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../../../../../../componants/Spinner/Spinner"

const AddAdminStaticLed = () => {
  const [img, setImg] = useState("")
  const [productname, setProductname] = useState("")
  const [category, setCategory] = useState("")
  const [des, setDes] = useState("")

  const { authorizationToken, server } = useAuth()
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSpinner(true)

    try {
      const response = await fetch(`${server}/api/v1/adminproducts/addentertainmentproducts`, {
        method: "POST",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productfile: img,
          productname: productname,
          category: category,
          description: des,
        })
      })


      if (response.ok) {
        setImg("")
        setProductname("")
        setCategory("")
        setDes("")
        toast.success("Product Added Successfully")
        setSpinner(false)
        navigate("/admin/entertainment")

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

  return (
    <>
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Add Static Led Product</h2>
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
              <input className="form-control rounded" onChange={(e) => setDes(e.target.value)} value={des} placeholder="Product Description" type="text" name="description" required />
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

export default AddAdminStaticLed;