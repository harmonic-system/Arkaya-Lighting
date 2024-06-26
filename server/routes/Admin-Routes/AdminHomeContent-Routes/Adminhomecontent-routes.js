const express = require("express")
const { addhomecarousel, deletehomecarousel, addhomeproduct, deletehomeproduct } = require("../../../controllers/Admin-Controllers/AdminHomeContent-Controllers/AdminHomeContent-controllers")

const router = express.Router()

router.route("/addhomecarousel").post(addhomecarousel)
router.route("/deletehomecarousel/:id").delete(deletehomecarousel)

router.route("/addhomeproduct").post(addhomeproduct)
router.route("/deletehomeproduct/:id").delete(deletehomeproduct)

module.exports = router