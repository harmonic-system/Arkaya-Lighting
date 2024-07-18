const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addclamp, getsingalclamp, updateclamp, deleteclamp } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/Rigging/AdminClamps-controllers/AdminClamps-controllers")

const router = express.Router()


router.route("/addclamp").post(authMiddleware, adminMiddleware, addclamp)

router.route("/getsingalclamp/:id").get(authMiddleware, adminMiddleware, getsingalclamp)

router.route("/updateclamp/:id").put(authMiddleware, adminMiddleware, updateclamp)

router.route("/deleteclamp/:id").delete(authMiddleware, adminMiddleware, deleteclamp)



module.exports = router