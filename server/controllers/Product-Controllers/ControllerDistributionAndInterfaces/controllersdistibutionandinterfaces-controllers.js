const DecorderAndAmplifier = require("../../../models/ProductModel/ControllerDistributionAndInterfaces-models/DecorderAndAmplifier/DecorderAndAmplifier-models")
const DMXController = require("../../../models/ProductModel/ControllerDistributionAndInterfaces-models/DMXControllers/DMXControllers-models")
const LEDController = require("../../../models/ProductModel/ControllerDistributionAndInterfaces-models/LEDController/LEDControllers-models")
const Processor = require("../../../models/ProductModel/ControllerDistributionAndInterfaces-models/Processors/Processors-models")
const SignalDistribution = require("../../../models/ProductModel/ControllerDistributionAndInterfaces-models/SignalDistribution/SignalDistribution-models")



// Controllers Distribution & Interfaces

const getledcontrollers = async (req, res, next) => {
    try {
        const products = await LEDController.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getdmxcontrollers = async (req, res, next) => {
    try {
        const products = await DMXController.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getsignaldistribution = async (req, res, next) => {
    try {
        const products = await SignalDistribution.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getdecorderandamplifiers = async (req, res, next) => {
    try {
        const products = await DecorderAndAmplifier.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}


const getprocessors = async (req, res, next) => {
    try {
        const products = await Processor.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}




module.exports = { getledcontrollers, getdmxcontrollers, getsignaldistribution, getdecorderandamplifiers, getprocessors }