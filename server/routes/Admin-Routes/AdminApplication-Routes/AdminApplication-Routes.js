const express = require("express")
const authMiddleware = require("../../../middleware/auth-middleware")
const adminMiddleware = require("../../../middleware/admin-middleware")
const { addapplication, getsingalapplication, updateapplication, deleteapplication } = require("../../../controllers/Admin-Controllers/AdminApplication-Controllers/AdminApplication-Controllers")

const router = express.Router()

router.route("/addapplication").post(authMiddleware, adminMiddleware, addapplication)
router.route("/getsingalapplication/:id").get(authMiddleware, adminMiddleware, getsingalapplication)
router.route("/editapplication/:id").put(authMiddleware, adminMiddleware, updateapplication)
router.route("/deleteapplication/:id").delete(authMiddleware, adminMiddleware, deleteapplication)


module.exports = router