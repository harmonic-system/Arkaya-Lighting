const express = require("express")
const authMiddleware = require("../../../middleware/auth-middleware")
const adminMiddleware = require("../../../middleware/admin-middleware")
const { adddecorativeProduct, getsingaldecorativeproducts, updatedecorativeproducts, deletedecorativeProduct,
  addinteriorProduct, getsingalinteriorproducts, updateinteriorproducts, deleteinteriorProduct,
  addexteriorProduct, getsingalexteriorproducts, updateexteriorproducts, deleteexteriorProduct,
  addentertainmentProduct, getsingalentertainmentproducts, updateentertainmentproducts, deleteentertainmentProduct,
  addLEDStripProduct, getsingaLEDStripproducts, updateLEDStripproducts, deleteLEDStripProduct } = require("../../../controllers/Admin-Controllers/AdminProduct-Controllers/AdminProduct-controllers")

const router = express.Router()

router.route("/adddecorativeproducts").post(authMiddleware, adminMiddleware, adddecorativeProduct)

router.route("/getsingaldecorativeproducts/:id").get(authMiddleware, adminMiddleware, getsingaldecorativeproducts)

router.route("/updatedecorativeproducts/:id").put(authMiddleware, adminMiddleware, updatedecorativeproducts)

router.route("/deletedecorativeproducts/:id").delete(authMiddleware, adminMiddleware, deletedecorativeProduct)



router.route("/addinteriorproducts").post(authMiddleware, adminMiddleware, addinteriorProduct)

router.route("/getsingalinteriorproducts/:id").get(authMiddleware, adminMiddleware, getsingalinteriorproducts)

router.route("/updateinteriorproducts/:id").put(authMiddleware, adminMiddleware, updateinteriorproducts)

router.route("/deleteinteriorproducts/:id").delete(authMiddleware, adminMiddleware, deleteinteriorProduct)



router.route("/addexteriorproducts").post(authMiddleware, adminMiddleware, addexteriorProduct)

router.route("/getsingalexteriorproducts/:id").get(authMiddleware, adminMiddleware, getsingalexteriorproducts)

router.route("/updateexteriorproducts/:id").put(authMiddleware, adminMiddleware, updateexteriorproducts)

router.route("/deleteexteriorproducts/:id").delete(authMiddleware, adminMiddleware, deleteexteriorProduct)






router.route("/addentertainmentproducts").post(authMiddleware, adminMiddleware, addentertainmentProduct)

router.route("/getsingalentertainmentproducts/:id").get(authMiddleware, adminMiddleware, getsingalentertainmentproducts)

router.route("/updateentertainmentproducts/:id").put(authMiddleware, adminMiddleware, updateentertainmentproducts)

router.route("/deleteentertainmentproducts/:id").delete(authMiddleware, adminMiddleware, deleteentertainmentProduct)



router.route("/addledstripproducts").post(authMiddleware, adminMiddleware, addLEDStripProduct)

router.route("/getsingaledstripproducts/:id").get(authMiddleware, adminMiddleware, getsingaLEDStripproducts)

router.route("/updateledstripproducts/:id").put(authMiddleware, adminMiddleware, updateLEDStripproducts)

router.route("/deleteledstripproducts/:id").delete(authMiddleware, adminMiddleware, deleteLEDStripProduct)





module.exports = router