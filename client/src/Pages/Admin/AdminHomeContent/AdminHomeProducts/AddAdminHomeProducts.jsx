import { useState } from "react"
import { toast } from "react-toastify"
import { useAuth } from "../../../../store/Auth";
import { useNavigate } from "react-router-dom";

const AddAdminHomeProducts = () => {

  const [img, setImg] = useState("")
  const [productname, setProductName] = useState("")

  const { authorizationToken, getAllHomeProduct, server } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${server}/api/v1/adminhomecontent/addhomeproduct`, {
        method: "POST",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: img,
          productname: productname,
        })
      })


      if (response.ok) {
        setImg("")
        setProductName("")
        toast.success("Home Carousel Added Successfully")
        getAllHomeProduct()
        navigate("/admin_products")

      }


    } catch (error) {
      toast.error("Failed to Add Home Products")
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
              <input className="form-control rounded" onChange={(e) => setProductName(e.target.value)} value={productname} placeholder="Product Name" type="text" name="productname" required />
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

export default AddAdminHomeProducts;