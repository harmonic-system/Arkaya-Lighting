const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addconnector, getsingalconnector, updateconnector, deleteconnector } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/SpaersAndAccessories/Connectors-controllers/Connectors-controllers")

const router = express.Router()


router.route("/addconnector").post(authMiddleware, adminMiddleware, addconnector)

router.route("/getsingalconnector/:id").get(authMiddleware, adminMiddleware, getsingalconnector)

router.route("/updateconnector/:id").put(authMiddleware, adminMiddleware, updateconnector)

router.route("/deleteconnector/:id").delete(authMiddleware, adminMiddleware, deleteconnector)



module.exports = router