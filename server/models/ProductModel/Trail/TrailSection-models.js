const { Schema, model } = require("mongoose");
const TrailInfo = require("./TrailInfo-models");

const trailsectionSchema = new Schema({
  card1: {
    sectionfile: {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
    },
    header: {
      type: String,
      required: true
    },
    cardInfo: [TrailInfo]
  },
})

const TrailSection = new model("TrailSection", trailsectionSchema)

module.exports = TrailSection