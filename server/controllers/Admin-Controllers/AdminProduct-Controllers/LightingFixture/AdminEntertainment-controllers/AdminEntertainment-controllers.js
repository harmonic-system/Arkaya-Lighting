const EffectLight = require("../../../../../models/ProductModel/LightingFixtures-models/Entertainment/EffectsLight-models")
const MHSLamp = require("../../../../../models/ProductModel/LightingFixtures-models/Entertainment/MHSLamp-models")
const MHSLed = require("../../../../../models/ProductModel/LightingFixtures-models/Entertainment/MHSLed-models")
const StaticLed = require("../../../../../models/ProductModel/LightingFixtures-models/Entertainment/StaticLed-models")
const cloudinary = require("../../../../../utils/cloudinary")



//  Moving Head Lamp Series


const addmovingheadlamp = async (req, res, next) => {
  const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
  // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkayalighting/products/entertainment/lamp",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await MHSLamp.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } })
    // console.log(product);

    res.status(200).json({ message: "Moving Head Series Lamp product created successfully", product })


  } catch (error) {
    next(error)
  }
}


const getsingalmovingheadlamp = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await MHSLamp.findOne({ _id: id })
    // console.log(singleProduct);
    res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}


const updatemovingheadlamp = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
    // console.log(productfile, imgpublicid, productname)
    if (productfile.startsWith("https://res.cloudinary.com/arkayalighting")) {
      const updatedata = await MHSLamp.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })

      res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkayalighting/products/entertainment/lamp",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await MHSLamp.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}


const deletemovingheadlamp = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedProduct = await MHSLamp.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}



//  Moving Head Led Series

const addmovingheadled = async (req, res, next) => {
  const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
  // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkayalighting/products/entertainment/led",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await MHSLed.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } })
    // console.log(product);

    res.status(200).json({ message: "Moving Head Series Led product created successfully", product })


  } catch (error) {
    next(error)
  }
}


const getsingalmovingheadled = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await MHSLed.findOne({ _id: id })
    // console.log(singleProduct);
    res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}


const updatemovingheadled = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
    // console.log(productfile, imgpublicid, productname)
    if (productfile.startsWith("https://res.cloudinary.com/arkayalighting")) {
      const updatedata = await MHSLed.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })

      res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkayalighting/products/entertainment/led",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await MHSLed.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}


const deletemovingheadled = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedProduct = await MHSLed.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}



//  Static Led Series

const addstaticled = async (req, res, next) => {
  const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
  // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkayalighting/products/entertainment/staticled",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await StaticLed.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } })
    // console.log(product);

    res.status(200).json({ message: "Static Led product created successfully", product })


  } catch (error) {
    next(error)
  }
}


const getsingalstaticled = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await StaticLed.findOne({ _id: id })
    // console.log(singleProduct);
    res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}


const updatestaticled = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
    // console.log(productfile, imgpublicid, productname)
    if (productfile.startsWith("https://res.cloudinary.com/arkayalighting")) {
      const updatedata = await StaticLed.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })

      res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkayalighting/products/entertainment/staticled",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await StaticLed.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}


const deletestaticled = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedProduct = await StaticLed.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}



//  Effect Light

const addeffectlight = async (req, res, next) => {
  const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
  // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11);

  try {

    const result = await cloudinary.uploader.upload(productfile, {
      folder: "arkayalighting/products/entertainment/effectlight",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await EffectLight.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } })
    // console.log(product);

    res.status(200).json({ message: "Effect Light product created successfully", product })


  } catch (error) {
    next(error)
  }
}


const getsingaleffectlight = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singleProduct = await EffectLight.findOne({ _id: id })
    // console.log(singleProduct);
    res.status(200).json(singleProduct)
  } catch (error) {
    next(error)
  }
}


const updateeffectlight = async (req, res, next) => {
  try {
    const id = req.params.id
    const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
    // console.log(productfile, imgpublicid, productname)
    if (productfile.startsWith("https://res.cloudinary.com/arkayalighting")) {
      const updatedata = await EffectLight.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })

      res.status(200).json({ message: "Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(productfile, {
          folder: "arkayalighting/products/entertainment/effectlight",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })
        const updatedata = await EffectLight.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })
        return res.status(200).json({ message: "Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}


const deleteeffectlight = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedProduct = await EffectLight.deleteOne({ _id: id })
    if (deletedProduct) {
      return res.status(200).json({ message: "Product Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}










module.exports = {
  addmovingheadlamp, getsingalmovingheadlamp, updatemovingheadlamp, deletemovingheadlamp,
  addmovingheadled, getsingalmovingheadled, updatemovingheadled, deletemovingheadled,
  addstaticled, getsingalstaticled, updatestaticled, deletestaticled,
  addeffectlight, getsingaleffectlight, updateeffectlight, deleteeffectlight
}