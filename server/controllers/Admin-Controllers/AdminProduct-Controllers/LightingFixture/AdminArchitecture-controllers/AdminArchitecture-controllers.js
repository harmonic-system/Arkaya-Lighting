const Commercial = require("../../../../../models/ProductModel/LightingFixtures-models/Architecture/Commercials-models")
const DynamicFacade = require("../../../../../models/ProductModel/LightingFixtures-models/Architecture/DynamicFacade-models")
const Landscape = require("../../../../../models/ProductModel/LightingFixtures-models/Architecture/Landscapes-models")
const Museum = require("../../../../../models/ProductModel/LightingFixtures-models/Architecture/Museum-models")
const Residential = require("../../../../../models/ProductModel/LightingFixtures-models/Architecture/Residential-models")
const cloudinary = require("../../../../../utils/cloudinary")



//  Commercials


const addcommercial = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/commercial",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await Commercial.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Commercial Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingalcommercial = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Commercial.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatecommercial = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Commercial.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/commercial",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Commercial.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletecommercial = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Commercial.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Dynamic Facade

const adddynamicfacade = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/dynamicfacade",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await DynamicFacade.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Dynamic Facade Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingaldynamicfacade = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await DynamicFacade.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatedynamicfacade = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await DynamicFacade.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/dynamicfacade",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await DynamicFacade.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletedynamicfacade = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await DynamicFacade.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Landscapes

const addlandscapes = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/landscapes",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })

        const product = await Landscape.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Landscapes Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingallandscapes = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Landscape.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatelandscapes = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Landscape.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/landscapes",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Landscape.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletelandscapes = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Landscape.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Museum

const addmuseum = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/museum",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await Museum.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Museum Product Created Successfully", product })


    } catch (error) {
        next(error)
    }
}


const getsingalmuseum = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Museum.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updatemuseum = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Museum.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/museum",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Museum.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deletemuseum = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Museum.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}



//  Residentials

const addresidential = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/lightingfixture/architecture/residential",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await Residential.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } })
        // console.log(product);

        return res.status(200).json({ message: "Residential Product Created Successfully", product })

    } catch (error) {
        next(error)
    }
}


const getsingalresidential = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await Residential.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updateresidential = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } = req.body
        // console.log(productfile, imgpublicid, productname)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await Residential.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/lightingfixture/architecture/residential",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await Residential.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deleteresidential = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await Residential.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}




module.exports = {
    addcommercial, getsingalcommercial, updatecommercial, deletecommercial,
    adddynamicfacade, getsingaldynamicfacade, updatedynamicfacade, deletedynamicfacade,
    addlandscapes, getsingallandscapes, updatelandscapes, deletelandscapes,
    addmuseum, getsingalmuseum, updatemuseum, deletemuseum,
    addresidential, getsingalresidential, updateresidential, deleteresidential,
}