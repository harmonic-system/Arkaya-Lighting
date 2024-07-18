const { Schema, model } = require("mongoose")

const productQuerySchema = new Schema({

  productName: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  organization: {
    type: String,
  },

  query: {
    type: String,
    required: true,
  },


})

const ProductQuery = new model("ProductQuery", productQuerySchema)

module.exports = ProductQuery


