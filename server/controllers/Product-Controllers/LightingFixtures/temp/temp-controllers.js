const FloodLight = require("../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/FloodLight-models")
const MediaPixel = require("../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/MediaPixel-models")
const TreeHanging = require("../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/TreeHanging-models")
const UnderGroundLight = require("../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/UnderGroundLight-models")
const UnderWaterLight = require("../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/UnderWaterLight-models")
const WallWasher = require("../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/WallWasherLight-models")

const getfloodlight = async (req, res, next) => {
    try {
        const products = await FloodLight.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getundergroundlight = async (req, res, next) => {
    try {
        const products = await UnderGroundLight.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getunderwaterlight = async (req, res, next) => {
    try {
        const products = await UnderWaterLight.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getwallwasherlight = async (req, res, next) => {
    try {
        const products = await WallWasher.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const gettreehanginglight = async (req, res, next) => {
    try {
        const products = await TreeHanging.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}
const getmediapixellight = async (req, res, next) => {
    try {
        const products = await MediaPixel.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}

module.exports = { getfloodlight, getundergroundlight, getunderwaterlight, getwallwasherlight, gettreehanginglight, getmediapixellight }