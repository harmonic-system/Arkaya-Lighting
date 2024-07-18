const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addprocessor, getsingalprocessor, updateprocessor, deleteprocessor } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/ControllerDistributionAndInterfaces/AdminProcessors-controllers/AdminProcessors-controllers")

const router = express.Router()


router.route("/addprocessor").post(authMiddleware, adminMiddleware, addprocessor)

router.route("/getsingalprocessor/:id").get(authMiddleware, adminMiddleware, getsingalprocessor)

router.route("/updateprocessor/:id").put(authMiddleware, adminMiddleware, updateprocessor)

router.route("/deleteprocessor/:id").delete(authMiddleware, adminMiddleware, deleteprocessor)



module.exports = router