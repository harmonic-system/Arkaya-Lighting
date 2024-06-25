const { Schema, model } = require('mongoose')

const InteriorProductSchema = new Schema({
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

const InteriorProduct = new model('InteriorProduct', InteriorProductSchema)

module.exports = InteriorProduct