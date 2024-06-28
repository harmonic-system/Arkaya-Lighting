const { Schema, model } = require("mongoose")

const newsLetterSchema = new Schema({
  newsletteremail: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  }
})

const NewsLetter = new model("NewsLetter", newsLetterSchema)

module.exports = NewsLetter