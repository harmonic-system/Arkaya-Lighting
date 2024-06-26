const { Schema, model } = require("mongoose")

const homecarouselSchema = new Schema({
  file: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

})

const HomeCarousel = new model("HomeCarousel", homecarouselSchema);

module.exports = HomeCarousel;

