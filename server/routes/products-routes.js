const express = require("express")
const { getdecorativeProduct, getinteriorProduct, getexteriorProduct, getentertainmentProduct, getledstripProduct } = require("../controllers/products-controllers")

const router = express.Router()

router.route("/getdecorativeproducts").get(getdecorativeProduct)

router.route("/getinteriorproducts").get(getinteriorProduct)

router.route("/getexteriorproducts").get(getexteriorProduct)

router.route("/getentertainmentproducts").get(getentertainmentProduct)

router.route("/getledstripproducts").get(getledstripProduct)

module.exports = router