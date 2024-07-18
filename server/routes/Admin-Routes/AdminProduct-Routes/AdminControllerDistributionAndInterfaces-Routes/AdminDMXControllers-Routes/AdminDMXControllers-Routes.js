const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { adddmxcontroller, getsingaldmxcontroller, updatedmxcontroller, deletedmxcontroller } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/ControllerDistributionAndInterfaces/AdminDMXControllers-controllers/AdminDMXControllers-controllers")

const router = express.Router()


router.route("/adddmxcontroller").post(authMiddleware, adminMiddleware, adddmxcontroller)

router.route("/getsingaldmxcontroller/:id").get(authMiddleware, adminMiddleware, getsingaldmxcontroller)

router.route("/updatedmxcontroller/:id").put(authMiddleware, adminMiddleware, updatedmxcontroller)

router.route("/deletedmxcontroller/:id").delete(authMiddleware, adminMiddleware, deletedmxcontroller)



module.exports = router