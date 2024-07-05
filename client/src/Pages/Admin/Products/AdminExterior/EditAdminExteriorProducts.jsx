import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../../../store/Auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../../componants/Spinner/Spinner";


const EditAdminExteriorProducts = () => {
  const { id } = useParams()
  // console.log(id);
  const { authorizationToken, server } = useAuth()
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)


  const [img, setImg] = useState("")
  const [imgpublicid, setImgPublicId] = useState("")
  const [productname, setProductname] = useState("")
  const [model, setModel] = useState("")
  const [description, setDescription] = useState({
    size: "",
    power: "",
    workingElectricity: "",
    controlMode: "",
    scheme: "",
    lampBeads: "",
    IPGrade: "",
    masterStroke: "",
    returnRoute: "",
    distanceFromCenter: "",
    lampshellFaceColor: "",
    noOfLight: ""
  })

  const getSingleExteriorProduct = async (id) => {
    const response = await fetch(`${server}/api/v1/adminproducts/getsingalexteriorproducts/${id}`, {
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
      setModel(singleProduct.model)
      setDescription({
        size: singleProduct.description.size,
        power: singleProduct.description.power,
        workingElectricity: singleProduct.description.workingElectricity,
        controlMode: singleProduct.description.controlMode,
        scheme: singleProduct.description.scheme,
        lampBeads: singleProduct.description.lampBeads,
        IPGrade: singleProduct.description.IPGrade,
        masterStroke: singleProduct.description.masterStroke,
        returnRoute: singleProduct.description.returnRoute,
        distanceFromCenter: singleProduct.description.distanceFromCenter,
        lampshellFaceColor: singleProduct.description.lampshellFaceColor,
        noOfLight: singleProduct.description.noOfLight
      })
    }
  }

  const handleDes = (e) => {
    setDescription({
      ...description,
      [e.target.name]: e.target.value
    })
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
      const response = await fetch(`${server}/api/v1/adminproducts/updateexteriorproducts/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productfile: img,
          imgpublicid: imgpublicid,
          productname: productname,
          model: model,
          size: description.size,
          power: description.power,
          workingElectricity: description.workingElectricity,
          controlMode: description.controlMode,
          scheme: description.scheme,
          lampBeads: description.lampBeads,
          IPGrade: description.IPGrade,
          masterStroke: description.masterStroke,
          returnRoute: description.returnRoute,
          distanceFromCenter: description.distanceFromCenter,
          lampshellFaceColor: description.lampshellFaceColor,
          noOfLight: description.noOfLight,
        })
      })


      if (response.ok) {
        setImg("")
        setImgPublicId("")
        setProductname("")
        setModel("")
        setDescription({
          size: "",
          power: "",
          workingElectricity: "",
          controlMode: "",
          scheme: "",
          lampBeads: "",
          IPGrade: "",
          masterStroke: "",
          returnRoute: "",
          distanceFromCenter: "",
          lampshellFaceColor: "",
          noOfLight: ""
        })
        const res = await response.json()
        // console.log(res);
        toast.success(res.message)
        setSpinner(false)
        navigate("/admin/exterior")

      }


    } catch (error) {
      toast.error("Failed to Update Product")
    }
  }

  useEffect(() => {
    getSingleExteriorProduct(id)
  }, [])


  return (
    <>
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Edit Exterior Product</h2>
        <form className="main_form mb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleImage} type="file" name="productfile" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setProductname(e.target.value)} value={productname} placeholder="Product name" type="text" name="productname" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={(e) => setModel(e.target.value)} value={model} placeholder="Product Model" type="text" name="model" required />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.size} placeholder="Size Of Pixel" type="text" name="size" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.power} placeholder="Power Of Pixel" type="text" name="power" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.workingElectricity} placeholder="Working electricity" type="text" name="workingElectricity" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.controlMode} placeholder="Control Mode" type="text" name="controlMode" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.scheme} placeholder="Scheme" type="text" name="scheme" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.lampBeads} placeholder="Lamp Beads" type="text" name="lampBeads" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.IPGrade} placeholder="IP Grade" type="text" name="IPGrade" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.masterStroke} placeholder="Master Stroke" type="text" name="masterStroke" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.returnRoute} placeholder="Return Route" type="text" name="returnRoute" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.distanceFromCenter} placeholder="Center-to-center The distance of the heart" type="text" name="distanceFromCenter" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.lampshellFaceColor} placeholder="Lampshell Face Color" type="text" name="lampshellFaceColor" />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input className="form-control rounded" onChange={handleDes} value={description.noOfLight} placeholder="Number Of Lights" type="text" name="noOfLight" />
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

export default EditAdminExteriorProducts