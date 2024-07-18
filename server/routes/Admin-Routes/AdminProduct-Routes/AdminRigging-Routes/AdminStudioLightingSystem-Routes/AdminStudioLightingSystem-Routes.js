const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addstudiolightingsystem, getsingalstudiolightingsystem, updatestudiolightingsystem, deletestudiolightingsystem } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/Rigging/AdminStudioLightingSystems-controllers/AdminStudioLightingSystems-controllers")

const router = express.Router()


router.route("/addstudiolightingsystem").post(authMiddleware, adminMiddleware, addstudiolightingsystem)

router.route("/getsingalstudiolightingsystem/:id").get(authMiddleware, adminMiddleware, getsingalstudiolightingsystem)

router.route("/updatestudiolightingsystem/:id").put(authMiddleware, adminMiddleware, updatestudiolightingsystem)

router.route("/deletestudiolightingsystem/:id").delete(authMiddleware, adminMiddleware, deletestudiolightingsystem)



module.exports = router