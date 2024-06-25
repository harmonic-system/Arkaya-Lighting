const ProductQuerry = require("../models/productQuerry-models")

const productQuerry = async (req, res, next) => {
  try {
    const { productName, name, email, phone, organization, querry } = req.body

    const QuerryRaise = ProductQuerry.create({ productName, name, email, phone, organization, querry })

    if (QuerryRaise) {
      res.status(200).json({ message: "Querry Send" })
    }
    else {
      res.status(500).json({ message: "Querry Not Send !!! Please Try Again Later" })
    }

  } catch (error) {
    next(error)
  }
}

module.exports = productQuerry

