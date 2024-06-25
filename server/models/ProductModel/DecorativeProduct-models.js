const { Schema, model } = require('mongoose')

const DecorativeProductSchema = new Schema({
  productfile: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },
  productname: {
    type: String,
    required: true
  },
})

const DecorativeProduct = new model('DecorativeProduct', DecorativeProductSchema)

module.exports = DecorativeProduct