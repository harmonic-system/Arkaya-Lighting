const Application = require("../../../models/application-models")
const cloudinary = require("../../../utils/cloudinary")

const addapplication = async (req, res, next) => {
    const { applicationfile, heading, about } = req.body
    // console.log(applicationfile,heading, about);

    try {

        const result = await cloudinary.uploader.upload(applicationfile, {
            folder: "arkayalighting/application",
            resource_type: 'auto',
            width: 300,
            height: 200,
        })


        const application = await Application.create({ applicationfile: { public_id: result.public_id, url: result.secure_url }, heading, about })
        // console.log(application);

        return res.status(200).json({ message: "Application created successfully", application })


    } catch (error) {
        next(error)
    }
}

const getsingalapplication = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(id);
        const singleapplication = await Application.findOne({ _id: id })
        // console.log(singleapplication);
        return res.status(200).json(singleapplication)
    } catch (error) {
        next(error)
    }
}

const updateapplication = async (req, res, next) => {
    try {
        const id = req.params.id
        const { applicationfile, imgpublicid, heading, about } = req.body
        // console.log(applicationfile, imgpublicid,heading, about)
        if (applicationfile.startsWith("https://res.cloudinary.com/arkaya")) {
            const updatedApplication = await Application.updateOne({ _id: id }, { $set: { applicationfile: { public_id: imgpublicid, url: applicationfile }, heading, about } })

            return res.status(200).json({ message: "Application Updated Successfully", updatedApplication })

        } else {

            const deletedImg = await cloudinary.uploader.destroy(imgpublicid)

            if (deletedImg) {
                const result = await cloudinary.uploader.upload(applicationfile, {
                    folder: "arkayalighting/application",
                    resource_type: 'auto',
                    width: 300,
                    height: 200,
                })


                const updatedApplication = await Application.updateOne({ _id: id }, { $set: { applicationfile: { public_id: result.public_id, url: result.secure_url }, heading, about } })
                return res.status(200).json({ message: "Application Updated Successfully", updatedApplication })
            } else {
                return res.status(500).json({ message: "Failed to Delete Image From Cloudinary" })
            }

        }

    } catch (error) {
        next(error)
    }
}

const deleteapplication = async (req, res, next) => {
    try {
        const id = req.params.id

        const deletedApplication = await Application.deleteOne({ _id: id })
        if (deletedApplication) {
            return res.status(200).json({ message: "Application Deleted Successfully" })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { addapplication, getsingalapplication, updateapplication, deleteapplication }