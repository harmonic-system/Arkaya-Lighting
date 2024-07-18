const express = require("express")
const { application } = require("../controllers/application-controllers")

const router = express.Router()

router.route("/getapplication").get(application)

module.exports = router