const express = require("express")
const contact = require("../controllers/contact-controllers")

const router = express.Router()

router.route("/form").post(contact)

module.exports = router


