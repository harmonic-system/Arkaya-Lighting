const { Schema, model } = require('mongoose')

const ExteriorProductSchema = new Schema({
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

const ExteriorProduct = new model('ExteriorProduct', ExteriorProductSchema)

module.exports = ExteriorProduct