const Indoor = require("../../../models/ProductModel/VideoDisplays-models/IndoorSeries/IndoorSeries-models")
const Outdoor = require("../../../models/ProductModel/VideoDisplays-models/OutdoorSeries/OutdoorSeries-models")
const Rental = require("../../../models/ProductModel/VideoDisplays-models/RentalSeries/RentalSeries-models")


// Video Displays


const getrentalseries = async (req, res, next) => {
    try {
        const products = await Rental.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getindoorseries = async (req, res, next) => {
    try {
        const products = await Indoor.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getoutdoorseries = async (req, res, next) => {
    try {
        const products = await Outdoor.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}




module.exports = { getrentalseries, getindoorseries, getoutdoorseries }