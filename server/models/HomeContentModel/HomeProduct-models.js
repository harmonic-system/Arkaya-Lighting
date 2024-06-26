const { Schema, model } = require("mongoose")

const homeproductSchema = new Schema({
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
  productname: {
    type: String,
    required: true
  },

})

const HomeProduct = new model("HomeProduct", homeproductSchema);

module.exports = HomeProduct;