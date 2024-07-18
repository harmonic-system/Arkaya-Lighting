const Connector = require("../../../models/ProductModel/SpaersAndAccessories/Connectore-models")



// Spaers And Accessories

const getconnector = async (req, res, next) => {
    try {
        const products = await Connector.find()
        // console.log(products);
        if (!products || products.length === 0) {
            return res.status(100).json({ message: "No Products Found" })
        }

        return res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}

module.exports = { getconnector }