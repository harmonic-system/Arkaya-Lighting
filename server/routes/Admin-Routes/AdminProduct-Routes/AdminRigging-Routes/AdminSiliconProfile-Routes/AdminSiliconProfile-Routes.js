const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addsiliconprofile, getsingalsiliconprofile, updatesiliconprofile, deletesiliconprofile } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/Rigging/AdminSiliconProfile-controllers/AdminSiliconProfile-controllers")

const router = express.Router()


router.route("/addsiliconprofile").post(authMiddleware, adminMiddleware, addsiliconprofile)

router.route("/getsingalsiliconprofile/:id").get(authMiddleware, adminMiddleware, getsingalsiliconprofile)

router.route("/updatesiliconprofile/:id").put(authMiddleware, adminMiddleware, updatesiliconprofile)

router.route("/deletesiliconprofile/:id").delete(authMiddleware, adminMiddleware, deletesiliconprofile)



module.exports = router