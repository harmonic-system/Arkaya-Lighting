const express = require("express")
const productQuerry = require("../controllers/productQuerry-controllers")

const router = express.Router()

router.route("/singalproduct").post(productQuerry)

module.exports = router


