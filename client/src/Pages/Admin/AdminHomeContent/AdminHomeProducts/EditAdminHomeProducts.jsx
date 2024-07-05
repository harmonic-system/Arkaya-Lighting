import { useEffect, useState } from "react"
import { useAuth } from "../../../../store/Auth"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../../../../componants/Spinner/Spinner"

const EditAdminHomeProducts = () => {

  const { id } = useParams()
  const [img, setImg] = useState("")
  const [productname, setProductName] = useState("")
  const [imgpublicid, setImgPublicId] = useState("")

  const { authorizationToken, server } = useAuth()
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)

  const getsingalhomeproduct = async (id) => {
    const response = await fetch(`${server}/api/v1/adminhomecontent/getsingalhomeproduct/${id}`, {
      method: "GET",
      headers: {
        "Authorization": authorizationToken
      }
    })
    const singlehomeproduct = await response.json()
    // console.log(singlehomeproduct);
    if (singlehomeproduct) {
      setImg(singlehomeproduct.file.url)
      setImgPublicId(singlehomeproduct.file.public_id)
      setProductName(singlehomeproduct.productname)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setSpinner(true)

    try {
      const response = await fetch(`${server}/api/v1/adminhomecontent/edithomeproduct/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: img,
          imgpublicid: imgpublicid,
          productname: productname,
        })
      })


      if (response.ok) {
        setImg("")
        setImgPublicId("")
        setProductName("")
        setSpinner(false)
        toast.success("Home Product Updated Successfully")
        navigate("/admin/homeproducts")

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

  useEffect(() => {
    getsingalhomeproduct(id)
  }, [])


  return (
    <>
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Edit Home Product</h2>
        <form className="main_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleImage} type="file" name="file" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setProductName(e.target.value)} value={productname} placeholder="Product Name" type="text" name="productname" required />
            </div>
            <div className=" col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <button type="submit" className="but rounded">Update</button>
            </div>
          </div>
        </form>
        {spinner ? <Spinner /> : ""}
      </div>
    </>
  )
}

export default EditAdminHomeProducts;