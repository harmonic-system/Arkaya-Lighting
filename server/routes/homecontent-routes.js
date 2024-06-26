const express = require("express")
const { homeCarousel, homeProducts } = require("../controllers/homecontent-controllers")

const router = express.Router()

router.route("/homecarousel").get(homeCarousel)

router.route("/homeproduct").get(homeProducts)

module.exports = router