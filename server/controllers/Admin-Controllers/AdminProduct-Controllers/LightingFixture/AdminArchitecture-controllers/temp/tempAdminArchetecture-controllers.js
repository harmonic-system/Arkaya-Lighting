const FloodLight = require("../../../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/FloodLight-models")
const MediaPixel = require("../../../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/MediaPixel-models")
const TreeHanging = require("../../../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/TreeHanging-models")
const UnderGroundLight = require("../../../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/UnderGroundLight-models")
const UnderWaterLight = require("../../../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/UnderWaterLight-models")
const WallWasher = require("../../../../../../models/ProductModel/LightingFixtures-models/Architecture/temp/WallWasherLight-models")
const cloudinary = require("../../../../../../utils/cloudinary")



//  Temp Architecture

// Flood Light

const addfloodlight = async (req, res, next) => {
    const { productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/temp/floodlight",
            resource_type: 'auto',
            width: 400,
            height: 400,
        })


        const product = await FloodLight.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "FloodLight Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingalfloodlight = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await FloodLight.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatefloodlight = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await FloodLight.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/temp/floodlight",
                    resource_type: 'auto',
                    width: 400,
                    height: 400,
                })
                const updatedata = await FloodLight.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletefloodlight = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await FloodLight.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Under Ground Light

const addundergroundlight = async (req, res, next) => {
    const { productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/temp/undergroundlight",
            resource_type: 'auto',
            width: 400,
            height: 400,
        })


        const product = await UnderGroundLight.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Under Ground Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingalundergroundlight = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await UnderGroundLight.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updateundergroundlight = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await UnderGroundLight.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/temp/undergroundlight",
                    resource_type: 'auto',
                    width: 400,
                    height: 400,
                })
                const updatedata = await UnderGroundLight.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deleteundergroundlight = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await UnderGroundLight.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Under Water Light

const addunderwaterlight = async (req, res, next) => {
    const { productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/temp/underwaterlight",
            resource_type: 'auto',
            width: 400,
            height: 400,
        })

        const product = await UnderWaterLight.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Under Water Lights Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingalunderwaterlight = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await UnderWaterLight.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updateunderwaterlight = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await UnderWaterLight.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/temp/underwaterlight",
                    resource_type: 'auto',
                    width: 400,
                    height: 400,
                })
                const updatedata = await UnderWaterLight.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deleteunderwaterlight = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await UnderWaterLight.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Wall Washer

const addwallwasherlight = async (req, res, next) => {
    const { productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/temp/wallwasher",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await WallWasher.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Wall Washer Product Created Successfully", product })


    } catch (error) {
        next(error)
    }
}


const getsingalwallwasherlight = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await WallWasher.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatewallwasherlight = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await WallWasher.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/temp/wallwasher",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await WallWasher.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletewallwasherlight = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await WallWasher.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Tree Hanging

const addtreehanginglight = async (req, res, next) => {
    const { productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model,des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/temp/treehanging",
            resource_type: 'auto',
            width: 400,
            height: 400,
        })


        const product = await TreeHanging.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Tree Hanging Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingaltreehanginglight = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await TreeHanging.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatetreehanginglight = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await TreeHanging.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/temp/treehanging",
                    resource_type: 'auto',
                    width: 400,
                    height: 400,
                })
                const updatedata = await TreeHanging.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletetreehanginglight = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await TreeHanging.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Media Pixels

const addmediapixel = async (req, res, next) => {
    const { productfile, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model,des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/temp/mediapixel",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await MediaPixel.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Media Pixels Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingalmediapixel = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await MediaPixel.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatemediapixel = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await MediaPixel.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/temp/mediapixel",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await MediaPixel.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { des, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletemediapixel = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await MediaPixel.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}




module.exports = {
    addfloodlight, getsingalfloodlight, updatefloodlight, deletefloodlight,
    addundergroundlight, getsingalundergroundlight, updateundergroundlight, deleteundergroundlight,
    addunderwaterlight, getsingalunderwaterlight, updateunderwaterlight, deleteunderwaterlight,
    addwallwasherlight, getsingalwallwasherlight, updatewallwasherlight, deletewallwasherlight,
    addtreehanginglight, getsingaltreehanginglight, updatetreehanginglight, deletetreehanginglight,
    addmediapixel, getsingalmediapixel, updatemediapixel, deletemediapixel,
}