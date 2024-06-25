const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

const Contact = new model("Contact", contactSchema)

module.exports = Contact


