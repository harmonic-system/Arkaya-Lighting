const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addstrip, getsingalstrip, updatestrip, deletestrip,
    adddotpixel, getsingaldotpixel, updatedotpixel, deletedotpixel,
    addledmatrix, getsingalledmatrix, updateledmatrix, deleteledmatrix } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/LightingFixture/AdminLEDPixels-controllers/AdminLEDPixels-controllers")

const router = express.Router()


router.route("/addstrip").post(authMiddleware, adminMiddleware, addstrip)

router.route("/getsingalstrip/:id").get(authMiddleware, adminMiddleware, getsingalstrip)

router.route("/updatestrip/:id").put(authMiddleware, adminMiddleware, updatestrip)

router.route("/deletestrip/:id").delete(authMiddleware, adminMiddleware, deletestrip)




router.route("/adddotpixel").post(authMiddleware, adminMiddleware, adddotpixel)

router.route("/getsingaldotpixel/:id").get(authMiddleware, adminMiddleware, getsingaldotpixel)

router.route("/updatedotpixel/:id").put(authMiddleware, adminMiddleware, updatedotpixel)

router.route("/deletedotpixel/:id").delete(authMiddleware, adminMiddleware, deletedotpixel)




router.route("/addledmatrix").post(authMiddleware, adminMiddleware, addledmatrix)

router.route("/getsingalledmatrix/:id").get(authMiddleware, adminMiddleware, getsingalledmatrix)

router.route("/updateledmatrix/:id").put(authMiddleware, adminMiddleware, updateledmatrix)

router.route("/deleteledmatrix/:id").delete(authMiddleware, adminMiddleware, deleteledmatrix)





module.exports = router