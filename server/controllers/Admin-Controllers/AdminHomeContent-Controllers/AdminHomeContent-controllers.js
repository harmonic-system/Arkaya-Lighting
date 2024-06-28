const HomeCarousel = require("../../../models/HomeContentModel/HomeCarousel-models")
const HomeProduct = require("../../../models/HomeContentModel/HomeProduct-models")
const cloudinary = require("../../../utils/cloudinary")

const addhomecarousel = async (req, res, next) => {
  const { file, heading, description } = req.body
  // console.log(productname,productfile);

  try {

    const result = await cloudinary.uploader.upload(file, {
      folder: "arkaya/home/carousel",
      resource_type: 'auto',
      width: 2100,
      height: 720,
    })


    const carousel = await HomeCarousel.create({ file: { public_id: result.public_id, url: result.secure_url }, heading, description })
    // console.log(product);

    res.status(200).json({ message: "Home Carousel created successfully", carousel })


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
      folder: "arkaya/home/product",
      resource_type: 'auto',
      width: 400,
      height: 300,
    })


    const product = await HomeProduct.create({ file: { public_id: result.public_id, url: result.secure_url }, productname })
    // console.log(product);

    res.status(200).json({ message: "Home Product created successfully", product })


  } catch (error) {
    next(error)
  }
}

const deletehomeproduct = async (req, res, next) => {
  try {
    // const public_id = req.params.public_id
    const id = req.params.id
    // console.log(public_id);

    // const deletedImage = await cloudinary.uploader.destroy(public_id)

    // if (deletedImage) {
    const deletedProduct = await HomeProduct.deleteOne({ _id: id })

    if (deletedProduct) {
      return res.status(200).json({ message: "Home Product Deleted Successfully" })
    }

    // }



  } catch (error) {
    console.log(error);
    next(error)
  }
}


module.exports = { addhomecarousel, deletehomecarousel, addhomeproduct, deletehomeproduct }