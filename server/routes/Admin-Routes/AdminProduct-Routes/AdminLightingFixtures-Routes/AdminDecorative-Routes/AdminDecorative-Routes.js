const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addchandeliers, getsingalchandeliers, updatechandeliers, deletechandeliers } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/LightingFixture/AdminDecorative-controllers/AdminDecorative-controllers")

const router = express.Router()

// Decorative

router.route("/addchandeliers").post(authMiddleware, adminMiddleware, addchandeliers)

router.route("/getsingalchandeliers/:id").get(authMiddleware, adminMiddleware, getsingalchandeliers)

router.route("/updatechandeliers/:id").put(authMiddleware, adminMiddleware, updatechandeliers)

router.route("/deletechandeliers/:id").delete(authMiddleware, adminMiddleware, deletechandeliers)





module.exports = router