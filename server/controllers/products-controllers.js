const DecorativeProduct = require("../models/ProductModel/DecorativeProduct-models")
const EntertainmentProduct = require("../models/ProductModel/EntertainmentProduct-models")
const ExteriorProduct = require("../models/ProductModel/ExteriorProduct-models")
const InteriorProduct = require("../models/ProductModel/InteriorProduct-models")
const LEDStripProduct = require("../models/ProductModel/LEDStripProduct-models")

const getdecorativeProduct = async (req, res, next) => {
  try {
    const products = await DecorativeProduct.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Decorative Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

const getinteriorProduct = async (req, res, next) => {
  try {
    const products = await InteriorProduct.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Interior Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

const getexteriorProduct = async (req, res, next) => {
  try {
    const products = await ExteriorProduct.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Exterior Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

const getentertainmentProduct = async (req, res, next) => {
  try {
    const products = await EntertainmentProduct.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Entertainment Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

const getledstripProduct = async (req, res, next) => {
  try {
    const products = await LEDStripProduct.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No LED Strip Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

module.exports = { getdecorativeProduct, getinteriorProduct, getexteriorProduct, getentertainmentProduct, getledstripProduct }