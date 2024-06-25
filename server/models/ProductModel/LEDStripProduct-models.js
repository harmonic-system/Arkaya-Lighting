const { Schema, model } = require('mongoose')

const LEDStripProductSchema = new Schema({
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

const LEDStripProduct = new model('LEDStripProduct', LEDStripProductSchema)

module.exports = LEDStripProduct