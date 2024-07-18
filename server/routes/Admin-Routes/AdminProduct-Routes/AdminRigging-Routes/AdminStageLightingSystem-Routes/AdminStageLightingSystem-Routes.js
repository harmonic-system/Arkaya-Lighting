const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addstagelightingsystem, getsingalstagelightingsystem, updatestagelightingsystem, deletestagelightingsystem } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/Rigging/AdminStageLightingSystems-controllers/AdminStageLightingSystems-controllers")

const router = express.Router()


router.route("/addstagelightingsystem").post(authMiddleware, adminMiddleware, addstagelightingsystem)

router.route("/getsingalstagelightingsystem/:id").get(authMiddleware, adminMiddleware, getsingalstagelightingsystem)

router.route("/updatestagelightingsystem/:id").put(authMiddleware, adminMiddleware, updatestagelightingsystem)

router.route("/deletestagelightingsystem/:id").delete(authMiddleware, adminMiddleware, deletestagelightingsystem)



module.exports = router