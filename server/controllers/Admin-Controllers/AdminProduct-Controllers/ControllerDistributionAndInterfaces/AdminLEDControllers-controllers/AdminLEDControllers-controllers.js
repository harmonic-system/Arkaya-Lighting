const LEDController = require("../../../../../models/ProductModel/ControllerDistributionAndInterfaces-models/LEDController/LEDControllers-models")
const cloudinary = require("../../../../../utils/cloudinary")



// LED Controllers

const addledcontroller = async (req, res, next) => {
    const { productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
    // console.log(productfile, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11);

    try {

        const result = await cloudinary.uploader.upload(productfile, {
            folder: "arkayalighting/products/controllerdistributioninterfaces/ledcontroller",
            resource_type: 'auto',
            width: 400,
            height: 300,
        })


        const product = await LEDController.create({ productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } })
        // console.log(product);

        return res.status(200).json({ message: "LED Controllers Product Created Successfully", product })


    } catch (error) {
        next(error)
    }
}


const getsingalledcontroller = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleProduct = await LEDController.findOne({ _id: id })
        // console.log(singleProduct);
        return res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}


const updateledcontroller = async (req, res, next) => {
    try {
        const id = req.params.id
        const { productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } = req.body
        // console.log(productfile, imgpublicid, productname, model, spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11)
        if (productfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedata = await LEDController.updateOne({ _id: id }, { $set: { productfile: { public_id: imgpublicid, url: productfile }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })

            return res.status(200).json({ message: "Product Updated Successfully", updatedata })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(productfile, {
                    folder: "arkayalighting/products/controllerdistributioninterfaces/ledcontroller",
                    resource_type: 'auto',
                    width: 400,
                    height: 300,
                })
                const updatedata = await LEDController.updateOne({ _id: id }, { $set: { productfile: { public_id: result.public_id, url: result.secure_url }, productname, model, description: { spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10, spec11 } } })
                return res.status(200).json({ message: "Product Updated Successfully", updatedata })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}


const deleteledcontroller = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedProduct = await LEDController.deleteOne({ _id: id })
        if (deletedProduct) {
            return res.status(200).json({ message: "Product Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}




module.exports = {
    addledcontroller, getsingalledcontroller, updateledcontroller, deleteledcontroller
}