const ProductQuery = require("../models/productQuery-models")

const productQuery = async (req, res, next) => {
  try {
    const { productName, name, email, phone, organization, query } = req.body
    // console.log(productName, name, email, phone, organization, query);

    const QueryRaise = ProductQuery.create({ productName, name, email, phone, organization, query })

    if (QueryRaise) {
      return res.status(200).json({ message: "Query Send" })
    }
    else {
      return res.status(500).json({ message: "Query Not Send !!! Please Try Again Later" })
    }

  } catch (error) {
    next(error)
  }
}

module.exports = productQuery

