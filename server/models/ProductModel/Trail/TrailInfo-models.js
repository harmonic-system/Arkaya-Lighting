const { Schema, model } = require("mongoose")

const trailInfoSchema = new Schema({
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
    des: {
      type: String,
    },
    spec1: {
      type: String,
    },
    spec2: {
      type: String,
    },
    spec3: {
      type: String,
    },
    spec4: {
      type: String,
    },
    spec5: {
      type: String,
    },
    spec6: {
      type: String,
    },
    spec7: {
      type: String,
    },
    spec8: {
      type: String,
    },
    spec9: {
      type: String,
    },
    spec10: {
      type: String,
    },
  },
},
)


const TrailInfo = new model("TrailInfo", trailInfoSchema)

module.exports = TrailInfo