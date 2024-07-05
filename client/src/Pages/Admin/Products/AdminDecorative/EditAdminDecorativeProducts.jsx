import { useEffect, useState } from "react"
import { useAuth } from "../../../../store/Auth"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../../../../componants/Spinner/Spinner"

const EditAdminDecorativeProducts = () => {

  const { id } = useParams()
  // console.log(id);
  const { authorizationToken, server } = useAuth()
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)


  const [img, setImg] = useState("")
  const [imgpublicid, setImgPublicId] = useState("")
  const [productname, setProductname] = useState("")

  const getSingleDecorativeProduct = async (id) => {
    const response = await fetch(`${server}/api/v1/adminproducts/getsingaldecorativeproducts/${id}`, {
      method: "GET",
      headers: {
        "Authorization": authorizationToken
      }
    })
    const singleProduct = await response.json()
    // console.log(singleProduct)
    if (singleProduct) {
      setImg(singleProduct.productfile.url)
      setImgPublicId(singleProduct.productfile.public_id)
      setProductname(singleProduct.productname)
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
      const response = await fetch(`${server}/api/v1/adminproducts/updatedecorativeproducts/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productfile: img,
          imgpublicid: imgpublicid,
          productname: productname,
        })
      })


      if (response.ok) {
        setImg("")
        setImgPublicId("")
        setProductname("")
        const res = await response.json()
        // console.log(res);
        toast.success(res.message)
        setSpinner(false)
        navigate("/admin/decorative")

      }

    } catch (error) {
      toast.error("Failed to Update Product")
    }
  }

  useEffect(() => {
    getSingleDecorativeProduct(id)
  }, [])





  return (
    <>
      <div className="container my-5">
          <h2 className="fw-bold mb-3">Edit Decorative Product</h2>
        <form className="main_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setProductname(e.target.value)} value={productname} placeholder="Product name" type="text" name="productname" required />
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

export default EditAdminDecorativeProducts;