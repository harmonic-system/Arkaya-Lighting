const express = require("express")
const productQuery = require("../controllers/productQuery-controllers")

const router = express.Router()

router.route("/singalproduct").post(productQuery)

module.exports = router


