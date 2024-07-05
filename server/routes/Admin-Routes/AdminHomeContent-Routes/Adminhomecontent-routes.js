const express = require("express")
const { addhomecarousel, getsingalhomecarousel, updatehomecarousel, deletehomecarousel, addhomeproduct, getsingalhomeproduct, updatehomeproduct, deletehomeproduct, } = require("../../../controllers/Admin-Controllers/AdminHomeContent-Controllers/AdminHomeContent-controllers")
const authMiddleware = require("../../../middleware/auth-middleware")
const adminMiddleware = require("../../../middleware/admin-middleware")

const router = express.Router()

router.route("/addhomecarousel").post(authMiddleware, adminMiddleware, addhomecarousel)
router.route("/getsingalhomecarousel/:id").get(authMiddleware, adminMiddleware, getsingalhomecarousel)
router.route("/edithomecarousel/:id").put(authMiddleware, adminMiddleware, updatehomecarousel)
router.route("/deletehomecarousel/:id").delete(authMiddleware, adminMiddleware, deletehomecarousel)

router.route("/addhomeproduct").post(authMiddleware, adminMiddleware, addhomeproduct)
router.route("/getsingalhomeproduct/:id").get(authMiddleware, adminMiddleware, getsingalhomeproduct)
router.route("/edithomeproduct/:id").put(authMiddleware, adminMiddleware, updatehomeproduct)
router.route("/deletehomeproduct/:id").delete(authMiddleware, adminMiddleware, deletehomeproduct)

module.exports = router