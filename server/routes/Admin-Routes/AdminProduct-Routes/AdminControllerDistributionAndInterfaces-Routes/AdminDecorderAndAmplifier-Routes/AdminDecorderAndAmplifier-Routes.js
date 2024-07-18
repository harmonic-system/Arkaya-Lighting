const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { adddecorderandamplifier, getsingaldecorderandamplifier, updatedecorderandamplifier, deletedecorderandamplifier } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/ControllerDistributionAndInterfaces/AdminDecorderAndAmplifier-controllers/AdminDecorderAndAmplifier-controllers")

const router = express.Router()


router.route("/adddecorderandamplifier").post(authMiddleware, adminMiddleware, adddecorderandamplifier)

router.route("/getsingaldecorderandamplifier/:id").get(authMiddleware, adminMiddleware, getsingaldecorderandamplifier)

router.route("/updatedecorderandamplifier/:id").put(authMiddleware, adminMiddleware, updatedecorderandamplifier)

router.route("/deletedecorderandamplifier/:id").delete(authMiddleware, adminMiddleware, deletedecorderandamplifier)



module.exports = router