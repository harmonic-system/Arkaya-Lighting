const express = require("express")
const newsLetter = require("../controllers/newsLetter-controllers")
const bodyParser = require("body-parser")
const encoder = bodyParser.urlencoded()

const router = express.Router()

router.route("/subscribe").post(encoder, newsLetter)

module.exports = router