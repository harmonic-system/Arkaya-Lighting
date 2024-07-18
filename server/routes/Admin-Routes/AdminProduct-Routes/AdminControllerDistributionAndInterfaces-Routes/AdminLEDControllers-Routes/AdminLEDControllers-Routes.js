const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addledcontroller, getsingalledcontroller, updateledcontroller, deleteledcontroller } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/ControllerDistributionAndInterfaces/AdminLEDControllers-controllers/AdminLEDControllers-controllers")

const router = express.Router()


router.route("/addledcontroller").post(authMiddleware, adminMiddleware, addledcontroller)

router.route("/getsingalledcontroller/:id").get(authMiddleware, adminMiddleware, getsingalledcontroller)

router.route("/updateledcontroller/:id").put(authMiddleware, adminMiddleware, updateledcontroller)

router.route("/deleteledcontroller/:id").delete(authMiddleware, adminMiddleware, deleteledcontroller)



module.exports = router