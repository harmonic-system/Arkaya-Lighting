const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addsignaldistribution, getsingalsignaldistribution, updatesignaldistribution, deletesignaldistribution,
    addpowersupply, getsingalpowersupply, updatepowersupply, deletepowersupply } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/ControllerDistributionAndInterfaces/AdminSignalDistribution&PowerSupply-controllers/AdminSignalDistributionAndPowerSupply-controllers")

const router = express.Router()


router.route("/addsignaldistribution").post(authMiddleware, adminMiddleware, addsignaldistribution)

router.route("/getsingalsignaldistribution/:id").get(authMiddleware, adminMiddleware, getsingalsignaldistribution)

router.route("/updatesignaldistribution/:id").put(authMiddleware, adminMiddleware, updatesignaldistribution)

router.route("/deletesignaldistribution/:id").delete(authMiddleware, adminMiddleware, deletesignaldistribution)


router.route("/addpowersupply").post(authMiddleware, adminMiddleware, addpowersupply)

router.route("/getsingalpowersupply/:id").get(authMiddleware, adminMiddleware, getsingalpowersupply)

router.route("/updatepowersupply/:id").put(authMiddleware, adminMiddleware, updatepowersupply)

router.route("/deletepowersupply/:id").delete(authMiddleware, adminMiddleware, deletepowersupply)



module.exports = router