const express = require("express")
const authMiddleware = require("../../../../../middleware/auth-middleware")
const adminMiddleware = require("../../../../../middleware/admin-middleware")
const {
  addmovingheadlamp, getsingalmovingheadlamp, updatemovingheadlamp, deletemovingheadlamp,
  addmovingheadled, getsingalmovingheadled, updatemovingheadled, deletemovingheadled,
  addstaticled, getsingalstaticled, updatestaticled, deletestaticled,
  addeffectlight, getsingaleffectlight, updateeffectlight, deleteeffectlight,
} = require("../../../../../controllers/Admin-Controllers/AdminProduct-Controllers/AdminEntertainment-controllers/AdminEntertainment-controllers")


const router = express.Router()



// Lightin Fixtures


// Architecture







// Entertainment

router.route("/addmovingheadlamp").post(authMiddleware, adminMiddleware, addmovingheadlamp)

router.route("/getsingalmovingheadlamp/:id").get(authMiddleware, adminMiddleware, getsingalmovingheadlamp)

router.route("/updatemovingheadlamp/:id").put(authMiddleware, adminMiddleware, updatemovingheadlamp)

router.route("/deletemovingheadlamp/:id").delete(authMiddleware, adminMiddleware, deletemovingheadlamp)




router.route("/addmovingheadled").post(authMiddleware, adminMiddleware, addmovingheadled)

router.route("/getsingalmovingheadled/:id").get(authMiddleware, adminMiddleware, getsingalmovingheadled)

router.route("/updatemovingheadled/:id").put(authMiddleware, adminMiddleware, updatemovingheadled)

router.route("/deletemovingheadled/:id").delete(authMiddleware, adminMiddleware, deletemovingheadled)




router.route("/addstaticled").post(authMiddleware, adminMiddleware, addstaticled)

router.route("/getsingalstaticled/:id").get(authMiddleware, adminMiddleware, getsingalstaticled)

router.route("/updatestaticled/:id").put(authMiddleware, adminMiddleware, updatestaticled)

router.route("/deletestaticled/:id").delete(authMiddleware, adminMiddleware, deletestaticled)




router.route("/addeffectlight").post(authMiddleware, adminMiddleware, addeffectlight)

router.route("/getsingaleffectlight/:id").get(authMiddleware, adminMiddleware, getsingaleffectlight)

router.route("/updateeffectlight/:id").put(authMiddleware, adminMiddleware, updateeffectlight)

router.route("/deleteeffectlight/:id").delete(authMiddleware, adminMiddleware, deleteeffectlight)



// Video Displays
// router.route("/get")




// Controllers Distribution And Interfaces
// router.route("/get")




// Rigging
// router.route("/get")




// Spaers And Accessories
// router.route("/get")


module.exports = router
