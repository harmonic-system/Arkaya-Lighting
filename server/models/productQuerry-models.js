const { Schema, model } = require("mongoose")

const productQuerrySchema = new Schema({

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

  querry: {
    type: String,
    required: true,
  },


})

const ProductQuerry = new model("ProductQuerry", productQuerrySchema)

module.exports = ProductQuerry