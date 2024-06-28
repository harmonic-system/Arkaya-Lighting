const HomeCarousel = require("../models/HomeContentModel/HomeCarousel-models")
const HomeProduct = require("../models/HomeContentModel/HomeProduct-models")

const homeCarousel = async (req, res, next) => {
  try {
    const carousels = await HomeCarousel.find()
    // console.log(products);
    if (!carousels || carousels.length === 0) {
      return res.status(100).json({ message: "No Home Carousels Found" })
    }

    res.status(200).json(carousels)
  } catch (error) {
    next(error)
  }
}


const homeProducts = async (req, res, next) => {
  try {
    const homeproducts = await HomeProduct.find()
    // console.log(products);
    if (!homeproducts || homeproducts.length === 0) {
      return res.status(100).json({ message: "No Home Products Found" })
    }

    res.status(200).json(homeproducts)
  } catch (error) {
    next(error)
  }
}


module.exports = { homeCarousel, homeProducts }