const Contact = require("../models/contact-models")

const contact = async (req, res, next) => {
  try {
    const { name, email, phone, organization, message } = req.body

    const contactCreated = await Contact.create({ name, email, phone, organization, message })

    if (contactCreated) {
      res.status(200).json({ message: "Message Send" })
    } else {
      res.status(500).json({ message: "Something Went Wrong !!! Please Try Again Later" })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = contact

