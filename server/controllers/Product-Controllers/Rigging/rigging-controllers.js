const AlluminiumProfile = require("../../../models/ProductModel/Rigging-models/AlluminiumProfile/AlluminiumProfile-models")
const Clamps = require("../../../models/ProductModel/Rigging-models/Clamps/Clamps-models")
const SiliconProfile = require("../../../models/ProductModel/Rigging-models/SiliconProfile/SiliconProfile-models")
const StageLightingSystem = require("../../../models/ProductModel/Rigging-models/StageLightingSystems/StageLightingSystems-models")
const StudioLightingSystem = require("../../../models/ProductModel/Rigging-models/StudioLightingSystems/StudioLightingSystems-models")
const Truss = require("../../../models/ProductModel/Rigging-models/Truss/Truss-models")




// Rigging


const getalluminiumprofile = async (req, res, next) => {
    try {
        const products = await AlluminiumProfile.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getclamps = async (req, res, next) => {
    try {
        const products = await Clamps.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getsiliconprofile = async (req, res, next) => {
    try {
        const products = await SiliconProfile.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getstagelightingsystem = async (req, res, next) => {
    try {
        const products = await StageLightingSystem.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getstudiolightingsystem = async (req, res, next) => {
    try {
        const products = await StudioLightingSystem.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const gettruss = async (req, res, next) => {
    try {
        const products = await Truss.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}



module.exports = { getalluminiumprofile, getclamps, getsiliconprofile, getstagelightingsystem, getstudiolightingsystem, gettruss }