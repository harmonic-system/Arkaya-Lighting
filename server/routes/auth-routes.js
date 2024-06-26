const express = require("express")
const { signUP, login, user } = require("../controllers/auth-controllers")
const authMiddleware = require("../middleware/auth-middleware")

const router = express.Router()

router.route("/signup").post(signUP)

router.route("/login").post(login)

router.route("/user").get(authMiddleware, user)

// router.route("/edit/:id").post(authMiddleware, editprofile)

module.exports = router


