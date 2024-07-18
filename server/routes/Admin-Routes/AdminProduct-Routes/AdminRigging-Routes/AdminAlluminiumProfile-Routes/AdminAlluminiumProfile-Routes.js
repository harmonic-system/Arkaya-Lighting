const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addalluminiumprofile, getsingalalluminiumprofile, updatealluminiumprofile, deletealluminiumprofile } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/Rigging/AdminAlluminiumProfile-controllers/AdminAlluminiumProfile-controllers")

const router = express.Router()


router.route("/addalluminiumprofile").post(authMiddleware, adminMiddleware, addalluminiumprofile)

router.route("/getsingalalluminiumprofile/:id").get(authMiddleware, adminMiddleware, getsingalalluminiumprofile)

router.route("/updatealluminiumprofile/:id").put(authMiddleware, adminMiddleware, updatealluminiumprofile)

router.route("/deletealluminiumprofile/:id").delete(authMiddleware, adminMiddleware, deletealluminiumprofile)



module.exports = router