const express = require("express")
const { addhomecarousel, deletehomecarousel, addhomeproduct, deletehomeproduct } = require("../../../controllers/Admin-Controllers/AdminHomeContent-Controllers/AdminHomeContent-controllers")
const authMiddleware = require("../../../middleware/auth-middleware")
const adminMiddleware = require("../../../middleware/admin-middleware")

const router = express.Router()

router.route("/addhomecarousel").post(authMiddleware, adminMiddleware, addhomecarousel)
router.route("/deletehomecarousel/:id").delete(authMiddleware, adminMiddleware, deletehomecarousel)

router.route("/addhomeproduct").post(authMiddleware, adminMiddleware, addhomeproduct)
router.route("/deletehomeproduct/:id").delete(authMiddleware, adminMiddleware, deletehomeproduct)

module.exports = router