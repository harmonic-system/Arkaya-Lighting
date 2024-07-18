const Studio = require("../../../../../models/ProductModel/LightingFixtures-models/ThreaterTelevisionAndStudio/Studio-models")
const Television = require("../../../../../models/ProductModel/LightingFixtures-models/ThreaterTelevisionAndStudio/Television-models")
const Threater = require("../../../../../models/ProductModel/LightingFixtures-models/ThreaterTelevisionAndStudio/Threater-models")
const cloudinary = require("../../../../../utils/cloudinary")



// Threater

const addthreater = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/threaterstudiotelevision/threater",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await Threater.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Threater Product Created Successfully", product })


    } catch (error) {
        next(error)
    }
}


const getsingalthreater = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Threater.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatethreater = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Threater.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/threaterstudiotelevision/threater",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Threater.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletethreater = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Threater.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Studio

const addstudio = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/threaterstudiotelevision/studio",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await Studio.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Studio Product Created Successfully", product })


    } catch (error) {
        next(error)
    }
}


const getsingalstudio = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Studio.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatestudio = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Studio.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/threaterstudiotelevision/studio",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Studio.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletestudio = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Studio.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Television

const addtelevision = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/threaterstudiotelevision/television",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await Television.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Television Product Created Successfully", product })


    } catch (error) {
        next(error)
    }
}


const getsingaltelevision = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Television.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatetelevision = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Television.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/threaterstudiotelevision/television",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Television.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletetelevision = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Television.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



module.exports = {
    addthreater, getsingalthreater, updatethreater, deletethreater,
    addstudio, getsingalstudio, updatestudio, deletestudio,
    addtelevision, getsingaltelevision, updatetelevision, deletetelevision,
}