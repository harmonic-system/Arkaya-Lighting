const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addindoorseries, getsingalindoorseries, updateindoorseries, deleteindoorseries } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/VideoDisplays/AdminIndoorSeries-controllers/AdminIndoorSeries-controllers")

const router = express.Router()


router.route("/addindoorseries").post(authMiddleware, adminMiddleware, addindoorseries)

router.route("/getsingalindoorseries/:id").get(authMiddleware, adminMiddleware, getsingalindoorseries)

router.route("/updateindoorseries/:id").put(authMiddleware, adminMiddleware, updateindoorseries)

router.route("/deleteindoorseries/:id").delete(authMiddleware, adminMiddleware, deleteindoorseries)



module.exports = router