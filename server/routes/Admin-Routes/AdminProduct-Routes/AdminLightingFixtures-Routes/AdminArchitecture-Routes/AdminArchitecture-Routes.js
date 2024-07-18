const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addcommercial, getsingalcommercial, updatecommercial, deletecommercial,
    adddynamicfacade, getsingaldynamicfacade, updatedynamicfacade, deletedynamicfacade,
    addlandscapes, getsingallandscapes, updatelandscapes, deletelandscapes,
    addmuseum, getsingalmuseum, updatemuseum, deletemuseum,
    addresidential, getsingalresidential, updateresidential, deleteresidential
} = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/LightingFixture/AdminArchitecture-controllers/AdminArchitecture-controllers")

const router = express.Router()

// Architecture

router.route("/addcommercial").post(authMiddleware, adminMiddleware, addcommercial)

router.route("/getsingalcommercial/:id").get(authMiddleware, adminMiddleware, getsingalcommercial)

router.route("/updatecommercial/:id").put(authMiddleware, adminMiddleware, updatecommercial)

router.route("/deletecommercial/:id").delete(authMiddleware, adminMiddleware, deletecommercial)




router.route("/adddynamicfacade").post(authMiddleware, adminMiddleware, adddynamicfacade)

router.route("/getsingaldynamicfacade/:id").get(authMiddleware, adminMiddleware, getsingaldynamicfacade)

router.route("/updatedynamicfacade/:id").put(authMiddleware, adminMiddleware, updatedynamicfacade)

router.route("/deletedynamicfacade/:id").delete(authMiddleware, adminMiddleware, deletedynamicfacade)




router.route("/addlandscapes").post(authMiddleware, adminMiddleware, addlandscapes)

router.route("/getsingallandscapes/:id").get(authMiddleware, adminMiddleware, getsingallandscapes)

router.route("/updatelandscapes/:id").put(authMiddleware, adminMiddleware, updatelandscapes)

router.route("/deletelandscapes/:id").delete(authMiddleware, adminMiddleware, deletelandscapes)




router.route("/addmuseum").post(authMiddleware, adminMiddleware, addmuseum)

router.route("/getsingalmuseum/:id").get(authMiddleware, adminMiddleware, getsingalmuseum)

router.route("/updatemuseum/:id").put(authMiddleware, adminMiddleware, updatemuseum)

router.route("/deletemuseum/:id").delete(authMiddleware, adminMiddleware, deletemuseum)




router.route("/addresidential").post(authMiddleware, adminMiddleware, addresidential)

router.route("/getsingalresidential/:id").get(authMiddleware, adminMiddleware, getsingalresidential)

router.route("/updateresidential/:id").put(authMiddleware, adminMiddleware, updateresidential)

router.route("/deleteresidential/:id").delete(authMiddleware, adminMiddleware, deleteresidential)




module.exports = router