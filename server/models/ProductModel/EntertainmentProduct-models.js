const { Schema, model } = require('mongoose')

const EntertainmentProductSchema = new Schema({
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

const EntertainmentProduct = new model('EntertainmentProduct', EntertainmentProductSchema)

module.exports = EntertainmentProduct