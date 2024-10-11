import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../../../../../../store/Auth"
import Spinner from "../../../../../../componants/Spinner/Spinner"
import { useAuthContext } from "../../../../../../store/authContext"

const EditAdminCommercial = () => {

  const { id } = useParams()
  // console.log(id);
  const { token, server } = useAuthContext()
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)


  const [img, setImg] = useState("")
  const [imgpublicid, setImgPublicId] = useState("")
  const [productname, setProductname] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState({
    size: "",
    shape: "",
    installation: "",
    direction: "",
    power: "",
    leds: "",
    cri: "",
    cct: "",
    efficiency: "",
    beamAngle: "",
    housingColor: ""
  })

  const getSingleProduct = async (id) => {
    const response = await fetch(`${server}/api/v1/lightingfixture/adminarchitecture/getsingalcommercial/${id}`, {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    const singleProduct = await response.json()
    // console.log(singleProduct)
    if (singleProduct) {
      setImg(singleProduct.productfile.url)
      setImgPublicId(singleProduct.productfile.public_id)
      setProductname(singleProduct.productname)
      setCategory(singleProduct.category)
      setDescription({
        size: singleProduct.description.size,
        shape: singleProduct.description.shape,
        installation: singleProduct.description.installation,
        direction: singleProduct.description.direction,
        power: singleProduct.description.power,
        leds: singleProduct.description.leds,
        cri: singleProduct.description.cri,
        cct: singleProduct.description.cct,
        efficiency: singleProduct.description.efficiency,
        beamAngle: singleProduct.description.beamAngle,
        housingColor: singleProduct.description.housingColor,
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
      const response = await fetch(`${server}/api/v1/lightingfixture/adminarchitecture/updatecommercial/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productfile: img,
          imgpublicid: imgpublicid,
          productname: productname,
          category: category,
          size: description.size,
          shape: description.shape,
          installation: description.installation,
          direction: description.direction,
          power: description.power,
          leds: description.leds,
          cri: description.cri,
          cct: description.cct,
          efficiency: description.efficiency,
          beamAngle: description.beamAngle,
          housingColor: description.housingColor
        })
      })


      if (response.ok) {
        setImg("")
        setImgPublicId("")
        setProductname("")
        setCategory("")
        setDescription({
          size: "",
          shape: "",
          installation: "",
          direction: "",
          power: "",
          leds: "",
          cri: "",
          cct: "",
          efficiency: "",
          beamAngle: "",
          housingColor: ""
        })
        const res = await response.json()
        // console.log(res);
        toast.success(res.message)
        setSpinner(false)
        navigate("/admin/commercial")

      }

    } catch (error) {
      toast.error("Failed to Update Product")
    }
  }

  const handlechange = (e) => {
    setDescription({
      ...description,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    getSingleProduct(id)
  }, [])





  return (
    <>
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Edit Commercial Product</h2>
        <form className="main_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setProductname(e.target.value)} value={productname} placeholder="Product name" type="text" name="productname" required />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setCategory(e.target.value)} value={category} placeholder="Product category" type="text" name="category" required />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.size} placeholder="Size" type="text" name="size" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.shape} placeholder="Shape" type="text" name="shape" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.installation} placeholder="Installation" type="text" name="installation" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.direction} placeholder="Direction" type="text" name="direction" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.power} placeholder="Power" type="text" name="power" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.leds} placeholder="Leds" type="text" name="leds" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.cri} placeholder="CRI" type="text" name="cri" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.cct} placeholder="CCT" type="text" name="cct" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.efficiency} placeholder="Efficiency" type="text" name="efficiency" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.beamAngle} placeholder="Beam Angle" type="text" name="beamAngle" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handlechange} value={description.housingColor} placeholder="Housing Color" type="text" name="housingColor" />
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

export default EditAdminCommercial;