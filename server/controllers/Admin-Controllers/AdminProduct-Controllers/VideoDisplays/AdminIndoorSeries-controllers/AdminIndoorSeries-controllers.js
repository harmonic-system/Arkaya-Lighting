const Indoor = require("../../../../../models/ProductModel/VideoDisplays-models/IndoorSeries/IndoorSeries-models")
const cloudinary = require("../../../../../utils/cloudinary")


// Indoor Series

const addindoorseries = async (req, res, next) => {
    const { productfile, productname, model, moduleSize, pixelPitch, pixelDensity, configuration, mode, resolution, driveType, refFreq, scanMode, portType, brigthness, renFix } = req.body
    // console.log(productfile, productname, model, moduleSize, pixelPitch, pixelDensity, configuration, mode, resolution, driveType, refFreq, scanMode, portType,brigthness,renFix);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/videodisplays/indoorseries",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await Indoor.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { moduleSize, pixelPitch, pixelDensity, configuration, mode, resolution, driveType, refFreq, scanMode, portType, brigthness, renFix } })
        // console.log(product);

        res.status(200).json({ message: "Indoor Series Product Created Successfully", product })


    } catch (error) {
        next(error)
    }
}


const getsingalindoorseries = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Indoor.findOne({ _id: id })
        // console.log(singleProduct);
        res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updateindoorseries = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, moduleSize, pixelPitch, pixelDensity, configuration, mode, resolution, driveType, refFreq, scanMode, portType, brigthness, renFix } = req.body
        // console.log(productfile, imgpublicid, productname, model, moduleSize, pixelPitch, pixelDensity, configuration, mode, resolution, driveType, refFreq, scanMode, portType,brigthness,renFix)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Indoor.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { moduleSize, pixelPitch, pixelDensity, configuration, mode, resolution, driveType, refFreq, scanMode, portType, brigthness, renFix } } })

            res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/videodisplays/indoorseries",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Indoor.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { moduleSize, pixelPitch, pixelDensity, configuration, mode, resolution, driveType, refFreq, scanMode, portType, brigthness, renFix } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deleteindoorseries = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Indoor.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}




module.exports = {
    addindoorseries, getsingalindoorseries, updateindoorseries, deleteindoorseries
}