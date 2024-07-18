const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addsignaldistribution, getsingalsignaldistribution, updatesignaldistribution, deletesignaldistribution } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/ControllerDistributionAndInterfaces/AdminSignalDistribution-controllers/AdminSignalDistribution-controllers")

const router = express.Router()


router.route("/addsignaldistribution").post(authMiddleware, adminMiddleware, addsignaldistribution)

router.route("/getsingalsignaldistribution/:id").get(authMiddleware, adminMiddleware, getsingalsignaldistribution)

router.route("/updatesignaldistribution/:id").put(authMiddleware, adminMiddleware, updatesignaldistribution)

router.route("/deletesignaldistribution/:id").delete(authMiddleware, adminMiddleware, deletesignaldistribution)



module.exports = router