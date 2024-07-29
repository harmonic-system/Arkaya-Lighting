const { Schema, model } = require("mongoose")

const outdoorseriesSchema = new Schema({
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
  model: {
    type: String,
    required: true
  },
  description: {
    moduleSize: {
      type: String,
    },
    pixelPitch: {
      type: String,
    },
    pixelDensity: {
      type: String,
    },
    configuration: {
      type: String,
    },
    mode: {
      type: String,
    },
    resolution: {
      type: String,
    },
    driveType: {
      type: String,
    },
    refFreq: {
      type: String,
    },
    scanMode: {
      type: String,
    },
    portType: {
      type: String,
    },
    brigthness: {
      type: String,
    },
    renFix: {
      type: String,
    },
  },
})


const Outdoor = new model("Outdoor", outdoorseriesSchema)

module.exports = Outdoor