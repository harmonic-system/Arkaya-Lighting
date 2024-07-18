const Contact = require("../../models/contact-models")
const NewsLetter = require("../../models/newsLetter-models")
const ProductQuery = require("../../models/productQuery-models")
const User = require("../../models/user-models")

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password -confirmPassword -isAdmin")

    if (!users || users.length === 0) {
      return res.status(100).json({ message: "No Users Found" })
    }

    return res.status(200).json(users)

  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedUser = await User.deleteOne({ _id: id })
    if (deletedUser) {
      return res.status(200).json({ message: "User Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

const getAllContacts = async (req, res, next) => {

  try {
    const contacts = await Contact.find()
    if (!contacts || contacts.length === 0) {
      return res.status(100).json({ message: "No Contacts Found" })
    }

    return res.status(200).json(contacts)

  } catch (error) {
    next(error)
  }
}

const deleteContact = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedContact = await Contact.deleteOne({ _id: id })
    if (deletedContact) {
      return res.status(200).json({ message: "Contact Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

const getAllNewsLetter = async (req, res, next) => {

  try {
    const newsLetters = await NewsLetter.find()
    if (!newsLetters || newsLetters.length === 0) {
      return res.status(100).json({ message: "No NewsLetter Found" })
    }

    return res.status(200).json(newsLetters)

  } catch (error) {
    next(error)
  }
}

const deleteNewsLetter = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedNewsLetter = await NewsLetter.deleteOne({ _id: id })
    if (deletedNewsLetter) {
      return res.status(200).json({ message: "NewsLetter Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

const getAllProductQuery = async (req, res, next) => {

  try {
    const productqueries = await ProductQuery.find()
    if (!productqueries || productqueries.length === 0) {
      return res.status(100).json({ message: "No Product Querry Found" })
    }

    return res.status(200).json(productqueries)

  } catch (error) {
    next(error)
  }
}

const deleteProductQuery = async (req, res, next) => {
  try {
    const id = req.params.id

    const deletedProductQuery = await ProductQuery.deleteOne({ _id: id })
    if (deletedProductQuery) {
      return res.status(200).json({ message: "Product Query Deleted Successfully" })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = { getAllUsers, deleteUser, getAllContacts, deleteContact, getAllNewsLetter, deleteNewsLetter, getAllProductQuery, deleteProductQuery }