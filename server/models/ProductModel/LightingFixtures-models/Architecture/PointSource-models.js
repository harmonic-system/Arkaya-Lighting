const { Schema, model } = require("mongoose")

const pointsourceSchema = new Schema({
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
  category: {
    type: String,
    required: true
  },
  description: {
    size: {
      type: String,
    },
    shape: {
      type: String,
    },
    installation: {
      type: String,
    },
    direction: {
      type: String,
    },
    power: {
      type: String,
    },
    leds: {
      type: String,
    },
    cri: {
      type: String,
    },
    cct: {
      type: String,
    },
    efficiency: {
      type: String,
    },
    beamAngle: {
      type: String,
    },
    housingColor: {
      type: String,
    },
  },
})


const PointSource = new model("PointSource", pointsourceSchema)

module.exports = PointSource