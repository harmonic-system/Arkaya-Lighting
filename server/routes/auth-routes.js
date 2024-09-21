const express = require("express")
const { signUP, login } = require("../controllers/auth-controllers")
const authMiddleware = require("../middleware/auth-middleware")
const validate = require("../middleware/validate-middleware")
const { signupSchema, loginSchema } = require("../validators/auth-validator")

const router = express.Router()

// router.route("/signup").post(signUP)
router.route("/signup").post(validate(signupSchema), signUP)

router.route("/login").post(validate(loginSchema), login)
// router.route("/login").post(login)

// router.route("/user").get(authMiddleware, user)

// router.route("/edit/:id").post(authMiddleware, editprofile)

module.exports = router


