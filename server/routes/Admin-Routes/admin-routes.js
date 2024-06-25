const express = require("express")
const authMiddleware = require("../../middleware/auth-middleware")
const adminMiddleware = require("../../middleware/admin-middleware")
const { getAllUsers, deleteUser, getAllContacts, deleteContact, getAllNewsLetter, deleteNewsLetter, getAllProductQuerry, deleteProductQuerry } = require("../../controllers/Admin-Controllers/Admin-controllers")

const router = express.Router()

router.route("/getusers").get(authMiddleware, adminMiddleware, getAllUsers)

router.route("/deleteuser/:id").delete(authMiddleware, adminMiddleware, deleteUser)

router.route("/getcontacts").get(authMiddleware, adminMiddleware, getAllContacts)

router.route("/deletecontact/:id").delete(authMiddleware, adminMiddleware, deleteContact)

router.route("/getnewsletters").get(authMiddleware, adminMiddleware, getAllNewsLetter)

router.route("/deletenewsletter/:id").delete(authMiddleware, adminMiddleware, deleteNewsLetter)

router.route("/getproductquerries").get(authMiddleware, adminMiddleware, getAllProductQuerry)

router.route("/deleteproductquerry/:id").delete(authMiddleware, adminMiddleware, deleteProductQuerry)

module.exports = router