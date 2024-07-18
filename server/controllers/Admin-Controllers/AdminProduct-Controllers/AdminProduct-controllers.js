const DecorativeProduct = require("../../../models/ProductModel/DecorativeProduct-models")
const EntertainmentProduct = require("../../../models/ProductModel/EntertainmentProduct-models")
const ExteriorProduct = require("../../../models/ProductModel/ExteriorProduct-models")
const InteriorProduct = require("../../../models/ProductModel/InteriorProduct-models")
const LEDStripProduct = require("../../../models/ProductModel/LEDStripProduct-models")
const cloudinary = require("../../../utils/cloudinary")

// Decorative Products

const adddecorativeProduct = async (req, res, next) => {
  const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
  // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkaya/products/decorative",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await DecorativeProduct.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } })
    // console.log(product);

    return res.status(200).json({ message: "Decorative product created successfully", product })


  } catch (error) {
    next(error)
  }
}

const getsingaldecorativeproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await DecorativeProduct.findOne({ _id: id })
    // console.log(singleProduct);
    return res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}

const updatedecorativeproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
    // console.log(productfile, imgpublicid, productname)
    if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
      const updatedata = await DecorativeProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })

      return res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkaya/products/decorative",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await DecorativeProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}

const deletedecorativeProduct = async (req, res, next) => {

  try {
    const id = req.params.id

    const deletedProduct = await DecorativeProduct.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Decorative Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

// Interior Products

const addinteriorProduct = async (req, res, next) => {
  const { productfile, productname } = req.body
  // console.log(productname,productfile);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkaya/products/interior",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await InteriorProduct.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname })
    // console.log(product);

    return res.status(200).json({ message: "Interior product created successfully", product })


  } catch (error) {
    next(error)
  }
}

const getsingalinteriorproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await InteriorProduct.findOne({ _id: id })
    // console.log(singleProduct);
    return res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}

const updateinteriorproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname } = req.body
    // console.log(productfile, imgpublicid, productname)
    if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
      const updatedata = await InteriorProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname } })

      return res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkaya/products/interior",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await InteriorProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}

const deleteinteriorProduct = async (req, res, next) => {

  try {
    const id = req.params.id

    const deletedProduct = await InteriorProduct.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Interior Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

// Exterior Products

const addexteriorProduct = async (req, res, next) => {
  const { productfile, productname, model, size, power, workingElectricity, controlMode, scheme, lampBeads, IPGrade, masterStroke, returnRoute, distanceFromCenter, lampshellFaceColor, noOfLight } = req.body
  // console.log(productname,productfile,model,size,power,workingElectricity,controlMode,scheme,lampBeads,IPGrade,masterStroke,returnRoute,distanceFromCenter,lampshellFaceColor,noOfLight);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkaya/products/exterior",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await ExteriorProduct.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { size, power, workingElectricity, controlMode, scheme, lampBeads, IPGrade, masterStroke, returnRoute, distanceFromCenter, lampshellFaceColor, noOfLight } })
    // console.log(product);

    return res.status(200).json({ message: "Exterior product created successfully", product })


  } catch (error) {
    next(error)
  }
}


const getsingalexteriorproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await ExteriorProduct.findOne({ _id: id })
    // console.log(singleProduct);
    return res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}


const updateexteriorproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, model, size, power, workingElectricity, controlMode, scheme, lampBeads, IPGrade, masterStroke, returnRoute, distanceFromCenter, lampshellFaceColor, noOfLight } = req.body
    // console.log(productfile, imgpublicid, productname, model, size, power, workingElectricity, controlMode, scheme, lampBeads, IPGrade, masterStroke, returnRoute, distanceFromCenter, lampshellFaceColor, noOfLight)
    if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
      const updatedata = await ExteriorProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { size, power, workingElectricity, controlMode, scheme, lampBeads, IPGrade, masterStroke, returnRoute, distanceFromCenter, lampshellFaceColor, noOfLight } } })

      return res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkaya/products/exterior",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await ExteriorProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { size, power, workingElectricity, controlMode, scheme, lampBeads, IPGrade, masterStroke, returnRoute, distanceFromCenter, lampshellFaceColor, noOfLight } } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}

const deleteexteriorProduct = async (req, res, next) => {

  try {
    const id = req.params.id

    const deletedProduct = await ExteriorProduct.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Exterior Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

// Entertainment Products

const addentertainmentProduct = async (req, res, next) => {
  const { productfile, productname, category, description } = req.body
  // console.log(productname,productfile);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkaya/products/entertainment",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await EntertainmentProduct.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, category, description })
    // console.log(product);

    return res.status(200).json({ message: "Entertainment product created successfully", product })


  } catch (error) {
    next(error)
  }
}

const getsingalentertainmentproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await EntertainmentProduct.findOne({ _id: id })
    // console.log(singleProduct);
    return res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}

const updateentertainmentproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, category, description } = req.body
    // console.log(productfile, imgpublicid, productname, category, description)
    if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
      const updatedata = await EntertainmentProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, category, description } })

      return res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkaya/products/entertainment",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await EntertainmentProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, category, description } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}

const deleteentertainmentProduct = async (req, res, next) => {

  try {
    const id = req.params.id

    const deletedProduct = await EntertainmentProduct.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Entertainment Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

// LED Strip Products

const addLEDStripProduct = async (req, res, next) => {
  const { productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
  // console.log(productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkaya/products/ledstrip",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await LEDStripProduct.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
    // console.log(product);

    return res.status(200).json({ message: "LED Strip product created successfully", product })


  } catch (error) {
    next(error)
  }
}

const getsingaLEDStripproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await LEDStripProduct.findOne({ _id: id })
    // console.log(singleProduct);
    return res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}


const updateLEDStripproducts = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
    if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
      const updatedata = await LEDStripProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

      return res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkaya/products/ledstrip",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await LEDStripProduct.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}

const deleteLEDStripProduct = async (req, res, next) => {

  try {
    const id = req.params.id

    const deletedProduct = await LEDStripProduct.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "LED Strip Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}


module.exports = {
  adddecorativeProduct, getsingaldecorativeproducts, updatedecorativeproducts, deletedecorativeProduct,
  addinteriorProduct, getsingalinteriorproducts, updateinteriorproducts, deleteinteriorProduct,
  addexteriorProduct, getsingalexteriorproducts, updateexteriorproducts, deleteexteriorProduct,
  addentertainmentProduct, getsingalentertainmentproducts, updateentertainmentproducts, deleteentertainmentProduct,
  addLEDStripProduct, getsingaLEDStripproducts, updateLEDStripproducts, deleteLEDStripProduct
}