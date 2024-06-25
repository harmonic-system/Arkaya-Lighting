const express = require("express")
const authMiddleware = require("../../../middleware/auth-middleware")
const adminMiddleware = require("../../../middleware/admin-middleware")
const { adddecorativeProduct, deletedecorativeProduct, addinteriorProduct, deleteinteriorProduct, addexteriorProduct, deleteexteriorProduct, addentertainmentProduct, deleteentertainmentProduct, addLEDStripProduct, deleteLEDStripProduct } = require("../../../controllers/Admin-Controllers/AdminProduct-Controllers/AdminProduct-controllers")

const router = express.Router()

router.route("/adddecorativeproducts").post(authMiddleware, adminMiddleware, adddecorativeProduct)

router.route("/deletedecorativeproducts/:id").delete(authMiddleware, adminMiddleware, deletedecorativeProduct)

router.route("/addinteriorproducts").delete(authMiddleware, adminMiddleware, addinteriorProduct)

router.route("/deleteinteriorproducts/:id").delete(authMiddleware, adminMiddleware, deleteinteriorProduct)

router.route("/addexteriorproducts").delete(authMiddleware, adminMiddleware, addexteriorProduct)

router.route("/deleteexteriorproducts/:id").delete(authMiddleware, adminMiddleware, deleteexteriorProduct)

router.route("/addentertainmentproducts").delete(authMiddleware, adminMiddleware, addentertainmentProduct)

router.route("/deleteentertainmentproducts/:id").delete(authMiddleware, adminMiddleware, deleteentertainmentProduct)

router.route("/addledstripproducts").delete(authMiddleware, adminMiddleware, addLEDStripProduct)

router.route("/deleteledstripproducts/:id").delete(authMiddleware, adminMiddleware, deleteLEDStripProduct)

module.exports = router