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
    // required: true
  },
  model: {
    type: String,
    required: true
  },
  description: {
    size: {
      type: String,
    },
    power: {
      type: String,
    },
    workingElectricity: {
      type: String,
    },
    controlMode: {
      type: String,
    },
    scheme: {
      type: String,
    },
    lampBeads: {
      type: String,
    },
    IPGrade: {
      type: String,
    },
    masterStroke: {
      type: String,
    },
    returnRoute: {
      type: String,
    },
    distanceFromCenter: {
      type: String,
    },
    lampshellFaceColor: {
      type: String,
    },
    noOfLight: {
      type: String,
    },

  },
})

const ExteriorProduct = new model('ExteriorProduct', ExteriorProductSchema)

module.exports = ExteriorProduct