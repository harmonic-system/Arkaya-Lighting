const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addrentalseries, getsingalrentalseries, updaterentalseries, deleterentalseries } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/VideoDisplays/AdminRentalSeries-controllers/AdminRentalSeries-controllers")

const router = express.Router()


router.route("/addrentalseries").post(authMiddleware, adminMiddleware, addrentalseries)

router.route("/getsingalrentalseries/:id").get(authMiddleware, adminMiddleware, getsingalrentalseries)

router.route("/updaterentalseries/:id").put(authMiddleware, adminMiddleware, updaterentalseries)

router.route("/deleterentalseries/:id").delete(authMiddleware, adminMiddleware, deleterentalseries)



module.exports = router