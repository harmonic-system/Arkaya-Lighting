const Application = require("../models/application-models")

const application = async (req, res, next) => {
    try {
        const application = await Application.find()
        // console.log(products);
        if (!application || application.length === 0) {
            return res.status(100).json({ message: "No Application Found" })
        }

        return res.status(200).json(application)
    } catch (error) {
        next(error)
    }
}

module.exports = { application }