import { useState } from "react"
import { toast } from "react-toastify"
import { useAuth } from "../../../../store/Auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../../componants/Spinner/Spinner";

const AddAdminInteriorProducts = () => {

  const [img, setImg] = useState("")
  const [productname, setProductname] = useState("")

  const { authorizationToken, getAllInteriorProducts, server } = useAuth()
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSpinner(true)

    try {
      const response = await fetch(`${server}/api/v1/adminproducts/addinteriorproducts`, {
        method: "POST",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productfile: img,
          productname: productname
        })
      })


      if (response.ok) {
        setImg("")
        setProductname("")
        toast.success("Product Added Successfully")
        getAllInteriorProducts()
        setSpinner(false)
        navigate("/admin/interior")

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
        <h2 className="fw-bold mb-3">Add Interior Product</h2>
        <form className="main_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" required />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setProductname(e.target.value)} value={productname} placeholder="Product name" type="text" name="productname" required />
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <button type="submit" className="but rounded">Add</button>
            </div>
          </div>
        </form>
        {spinner ? <Spinner /> : ""}
      </div>
    </>
  )
}

export default AddAdminInteriorProducts;