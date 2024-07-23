const HomeCarousel = require("../../../models/HomeContentModel/HomeCarousel-models")
const HomeProduct = require("../../../models/HomeContentModel/HomeProduct-models")
const cloudinary = require("../../../utils/cloudinary")

const addhomecarousel = async (req, res, next) => {
  const { file, heading, description } = req.body
  // console.log(productname,productfile);

  try {

    const result = await cloudinary.uploader.upload(file, {
      folder: "arkayalighting/home/carousel",
      resource_type: 'auto',
      width: 2100,
      height: 720,
    })


    const carousel = await HomeCarousel.create({ file: { public_id: result.public_id, url: result.secure_url }, heading, description })
    // console.log(product);

    return res.status(200).json({ message: "Home Carousel created successfully", carousel })


  } catch (error) {
    next(error)
  }
}

const getsingalhomecarousel = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singlehomecarousel = await HomeCarousel.findOne({ _id: id })
    // console.log(singleProduct);
    return res.status(200).json(singlehomecarousel)
  } catch (error) {
    next(error)
  }
}

const updatehomecarousel = async (req, res, next) => {
  try {
    const id = req.params.id
    const { file, imgpublicid, heading, description } = req.body
    // console.log(file, imgpublicid, heading, description)
    if (file.startsWith("https://res.cloudinary.com/arkaya")) {
      const updatedata = await HomeCarousel.updateOne({ _id: id }, { $set: { file: { public_id: imgpublicid, url: file }, heading, description } })

      return res.status(200).json({ message: "Home Carousel Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(file, {
          folder: "arkayalighting/home/carousel",
          resource_type: 'auto',
          width: 2100,
          height: 720,
        })


        const updatedata = await HomeCarousel.updateOne({ _id: id }, { $set: { file: { public_id: result.public_id, url: result.secure_url }, heading, description } })
        return res.status(200).json({ message: "Home Carousel Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}

const deletehomecarousel = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedCarousel = await HomeCarousel.deleteOne({ _id: id })
    if (deletedCarousel) {
      return res.status(200).json({ message: "Home Carousel Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}


const addhomeproduct = async (req, res, next) => {

  const { file, productname } = req.body
  // console.log(productname,productfile);

  try {

    const result = await cloudinary.uploader.upload(file, {
      folder: "arkayalighting/home/product",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await HomeProduct.create({ file: { public_id: result.public_id, url: result.secure_url }, productname })
    // console.log(product);

    return res.status(200).json({ message: "Home Product created successfully", product })


  } catch (error) {
    next(error)
  }
}

const getsingalhomeproduct = async (req, res, next) => {
  try {
    const id = req.params.id
    // console.log(id);
    const singlehomeproduct = await HomeProduct.findOne({ _id: id })
    // console.log(singleProduct);
    return res.status(200).json(singlehomeproduct)
  } catch (error) {
    next(error)
  }
}

const updatehomeproduct = async (req, res, next) => {
  try {
    const id = req.params.id
    const { file, imgpublicid, productname } = req.body
    // console.log(file, imgpublicid, productname)
    if (file.startsWith("https://res.cloudinary.com/arkaya")) {
      const updatedata = await HomeProduct.updateOne({ _id: id }, { $set: { file: { public_id: imgpublicid, url: file }, productname } })

      return res.status(200).json({ message: "Home Product Updated Successfully", updatedata })

    } else {

      const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

      if (deletedImg) {
        const result = await cloudinary.uploader.upload(file, {
          folder: "arkayalighting/home/product",
          resource_type: 'auto',
          width: 400,
          height: 300,
        })


        const updatedata = await HomeProduct.updateOne({ _id: id }, { $set: { file: { public_id: result.public_id, url: result.secure_url }, productname } })
        return res.status(200).json({ message: "Home Product Updated Successfully", updatedata })
      } else {
        return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
      }

    }

  } catch (error) {
    next(error)
  }
}

const deletehomeproduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedProduct = await HomeProduct.deleteOne({ _id: id })

    if (deletedProduct) {
      return res.status(200).json({ message: "Home Product Deleted Successfully" })

    }
  } catch (error) {
    // console.log(error);
    next(error)
  }
}


module.exports = { addhomecarousel, getsingalhomecarousel, updatehomecarousel, deletehomecarousel, addhomeproduct, getsingalhomeproduct, updatehomeproduct, deletehomeproduct }
