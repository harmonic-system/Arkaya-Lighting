const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addtruss, getsingaltruss, updatetruss, deletetruss } = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/Rigging/AdminTruss-controllers/AdminTruss-controllers")

const router = express.Router()


router.route("/addtruss").post(authMiddleware, adminMiddleware, addtruss)

router.route("/getsingaltruss/:id").get(authMiddleware, adminMiddleware, getsingaltruss)

router.route("/updatetruss/:id").put(authMiddleware, adminMiddleware, updatetruss)

router.route("/deletetruss/:id").delete(authMiddleware, adminMiddleware, deletetruss)



module.exports = router