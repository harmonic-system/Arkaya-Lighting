const Commercial = require("../../../models/ProductModel/LightingFixtures-models/Architecture/Commercials-models")
const DynamicFacade = require("../../../models/ProductModel/LightingFixtures-models/Architecture/DynamicFacade-models")
const Landscape = require("../../../models/ProductModel/LightingFixtures-models/Architecture/Landscapes-models")
const Museum = require("../../../models/ProductModel/LightingFixtures-models/Architecture/Museum-models")
const Residential = require("../../../models/ProductModel/LightingFixtures-models/Architecture/Residential-models")
const Chandelier = require("../../../models/ProductModel/LightingFixtures-models/Decorative/Chandelier-models")
const EffectLight = require("../../../models/ProductModel/LightingFixtures-models/Entertainment/EffectsLight-models")
const MHSLamp = require("../../../models/ProductModel/LightingFixtures-models/Entertainment/MHSLamp-models")
const MHSLed = require("../../../models/ProductModel/LightingFixtures-models/Entertainment/MHSLed-models")
const StaticLed = require("../../../models/ProductModel/LightingFixtures-models/Entertainment/StaticLed-models")
const DotPixel = require("../../../models/ProductModel/LightingFixtures-models/LEDPixels/DotPixels-models")
const LedMatrix = require("../../../models/ProductModel/LightingFixtures-models/LEDPixels/LEDMatrix-models")
const Strip = require("../../../models/ProductModel/LightingFixtures-models/LEDPixels/Strips-models")
const Studio = require("../../../models/ProductModel/LightingFixtures-models/ThreaterTelevisionAndStudio/Studio-models")
const Threater = require("../../../models/ProductModel/LightingFixtures-models/ThreaterTelevisionAndStudio/Threater-models")
const Television = require("../../../models/ProductModel/LightingFixtures-models/ThreaterTelevisionAndStudio/Television-models")







// Architecture

const getcommercials = async (req, res, next) => {
  try {
    const products = await Commercial.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getdynamicfacade = async (req, res, next) => {
  try {
    const products = await DynamicFacade.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getlandscapes = async (req, res, next) => {
  try {
    const products = await Landscape.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getmuseums = async (req, res, next) => {
  try {
    const products = await Museum.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getresidentials = async (req, res, next) => {
  try {
    const products = await Residential.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}




// Entertainment

const getmovingheadserieslamp = async (req, res, next) => {
  try {
    const products = await MHSLamp.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getmovingheadseriesled = async (req, res, next) => {
  try {
    const products = await MHSLed.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getstaticled = async (req, res, next) => {
  try {
    const products = await StaticLed.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const geteffectslight = async (req, res, next) => {
  try {
    const products = await EffectLight.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}




// LED Pixels

const getstrips = async (req, res, next) => {
  try {
    const products = await Strip.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getdotpixels = async (req, res, next) => {
  try {
    const products = await DotPixel.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getledmatrix = async (req, res, next) => {
  try {
    const products = await LedMatrix.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}





// Decorative


const getchandeliers = async (req, res, next) => {
  try {
    const products = await Chandelier.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}




// Threater Studio television


const getthreater = async (req, res, next) => {
  try {
    const products = await Threater.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const getstudio = async (req, res, next) => {
  try {
    const products = await Studio.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}


const gettelevision = async (req, res, next) => {
  try {
    const products = await Television.find()
    // console.log(products);
    if (!products || products.length === 0) {
      return res.status(100).json({ message: "No Products Found" })
    }

    return res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}





module.exports = {
  getcommercials, getdynamicfacade, getlandscapes, getmuseums, getresidentials,
  getmovingheadserieslamp, getmovingheadseriesled, getstaticled, geteffectslight,
  getstrips, getdotpixels, getledmatrix,
  getchandeliers,
  getthreater, getstudio, gettelevision
}