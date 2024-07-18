const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addthreater, getsingalthreater, updatethreater, deletethreater,
    addstudio, getsingalstudio, updatestudio, deletestudio,
    addtelevision, getsingaltelevision, updatetelevision, deletetelevision } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/LightingFixture/AdminThreaterStudioAndTelevision-controllers/AdminThreaterStudioAndTelevision-controllers")

const router = express.Router()

// Threater Television And Studio

router.route("/addthreater").post(authMiddleware, adminMiddleware, addthreater)

router.route("/getsingalthreater/:id").get(authMiddleware, adminMiddleware, getsingalthreater)

router.route("/updatethreater/:id").put(authMiddleware, adminMiddleware, updatethreater)

router.route("/deletethreater/:id").delete(authMiddleware, adminMiddleware, deletethreater)




router.route("/addstudio").post(authMiddleware, adminMiddleware, addstudio)

router.route("/getsingalstudio/:id").get(authMiddleware, adminMiddleware, getsingalstudio)

router.route("/updatestudio/:id").put(authMiddleware, adminMiddleware, updatestudio)

router.route("/deletestudio/:id").delete(authMiddleware, adminMiddleware, deletestudio)




router.route("/addtelevision").post(authMiddleware, adminMiddleware, addtelevision)

router.route("/getsingaltelevision/:id").get(authMiddleware, adminMiddleware, getsingaltelevision)

router.route("/updatetelevision/:id").put(authMiddleware, adminMiddleware, updatetelevision)

router.route("/deletetelevision/:id").delete(authMiddleware, adminMiddleware, deletetelevision)





module.exports = router