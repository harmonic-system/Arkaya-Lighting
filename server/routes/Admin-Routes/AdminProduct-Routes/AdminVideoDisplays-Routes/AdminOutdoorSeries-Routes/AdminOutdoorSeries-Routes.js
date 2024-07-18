const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addoutdoorseries, getsingaloutdoorseries, updateoutdoorseries, deleteoutdoorseries } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/VideoDisplays/AdminOutdoorSeries-controllers/AdminOutdoorSeries-controllers")

const router = express.Router()


router.route("/addoutdoorseries").post(authMiddleware, adminMiddleware, addoutdoorseries)

router.route("/getsingaloutdoorseries/:id").get(authMiddleware, adminMiddleware, getsingaloutdoorseries)

router.route("/updateoutdoorseries/:id").put(authMiddleware, adminMiddleware, updateoutdoorseries)

router.route("/deleteoutdoorseries/:id").delete(authMiddleware, adminMiddleware, deleteoutdoorseries)



module.exports = router