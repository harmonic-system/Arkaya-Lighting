const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const { addcommercial, getsingalcommercial, updatecommercial, deletecommercial,
    adddynamicfacade, getsingaldynamicfacade, updatedynamicfacade, deletedynamicfacade,
    addlandscapes, getsingallandscapes, updatelandscapes, deletelandscapes,
    addmuseum, getsingalmuseum, updatemuseum, deletemuseum,
    addresidential, getsingalresidential, updateresidential, deleteresidential,
    addpointsource, getsingalpointsource, updatepointsource, deletepointsource,
} = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/LightingFixture/AdminArchitecture-controllers/AdminArchitecture-controllers")



const { addfloodlight, getsingalfloodlight, updatefloodlight, deletefloodlight,
    addundergroundlight, getsingalundergroundlight, updateundergroundlight, deleteundergroundlight,
    addunderwaterlight, getsingalunderwaterlight, updateunderwaterlight, deleteunderwaterlight,
    addwallwasherlight, getsingalwallwasherlight, updatewallwasherlight, deletewallwasherlight,
    addtreehanginglight, getsingaltreehanginglight, updatetreehanginglight, deletetreehanginglight,
    addmediapixel, getsingalmediapixel, updatemediapixel, deletemediapixel,
} = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/LightingFixture/AdminArchitecture-controllers/temp/tempAdminArchetecture-controllers")

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




router.route("/addpointsource").post(authMiddleware, adminMiddleware, addpointsource)

router.route("/getsingalpointsource/:id").get(authMiddleware, adminMiddleware, getsingalpointsource)

router.route("/updatepointsource/:id").put(authMiddleware, adminMiddleware, updatepointsource)

router.route("/deletepointsource/:id").delete(authMiddleware, adminMiddleware, deletepointsource)











// temp


router.route("/addfloodlight").post(authMiddleware, adminMiddleware, addfloodlight)

router.route("/getsingalfloodlight/:id").get(authMiddleware, adminMiddleware, getsingalfloodlight)

router.route("/updatefloodlight/:id").put(authMiddleware, adminMiddleware, updatefloodlight)

router.route("/deletefloodlight/:id").delete(authMiddleware, adminMiddleware, deletefloodlight)




router.route("/addundergroundlight").post(authMiddleware, adminMiddleware, addundergroundlight)

router.route("/getsingalundergroundlight/:id").get(authMiddleware, adminMiddleware, getsingalundergroundlight)

router.route("/updateundergroundlight/:id").put(authMiddleware, adminMiddleware, updateundergroundlight)

router.route("/deleteundergroundlight/:id").delete(authMiddleware, adminMiddleware, deleteundergroundlight)




router.route("/addunderwaterlight").post(authMiddleware, adminMiddleware, addunderwaterlight)

router.route("/getsingalunderwaterlight/:id").get(authMiddleware, adminMiddleware, getsingalunderwaterlight)

router.route("/updateunderwaterlight/:id").put(authMiddleware, adminMiddleware, updateunderwaterlight)

router.route("/deleteunderwaterlight/:id").delete(authMiddleware, adminMiddleware, deleteunderwaterlight)




router.route("/addwallwasherlight").post(authMiddleware, adminMiddleware, addwallwasherlight)

router.route("/getsingalwallwasherlight/:id").get(authMiddleware, adminMiddleware, getsingalwallwasherlight)

router.route("/updatewallwasherlight/:id").put(authMiddleware, adminMiddleware, updatewallwasherlight)

router.route("/deletewallwasherlight/:id").delete(authMiddleware, adminMiddleware, deletewallwasherlight)




router.route("/addtreehanginglight").post(authMiddleware, adminMiddleware, addtreehanginglight)

router.route("/getsingaltreehanginglight/:id").get(authMiddleware, adminMiddleware, getsingaltreehanginglight)

router.route("/updatetreehanginglight/:id").put(authMiddleware, adminMiddleware, updatetreehanginglight)

router.route("/deletetreehanginglight/:id").delete(authMiddleware, adminMiddleware, deletetreehanginglight)




router.route("/addmediapixel").post(authMiddleware, adminMiddleware, addmediapixel)

router.route("/getsingalmediapixel/:id").get(authMiddleware, adminMiddleware, getsingalmediapixel)

router.route("/updatemediapixel/:id").put(authMiddleware, adminMiddleware, updatemediapixel)

router.route("/deletemediapixel/:id").delete(authMiddleware, adminMiddleware, deletemediapixel)




module.exports = router