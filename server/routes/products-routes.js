const express = require("express")

const { getdecorativeProduct, getinteriorProduct, getexteriorProduct, getentertainmentProduct, getledstripProduct } = require("../controllers/products-controllers")

const { getcommercials, getdynamicfacade, getlandscapes, getmuseums, getresidentials,
  getmovingheadserieslamp, getmovingheadseriesled, getstaticled, geteffectslight,
  getstrips, getdotpixels, getledmatrix,
  getchandeliers,
  getthreater, getstudio, gettelevision } = require("../controllers/Product-Controllers/LightingFixtures/lightingfixtures-controllers")


const { getrentalseries, getindoorseries, getoutdoorseries } = require("../controllers/Product-Controllers/VideoDisplays/videodisplay-controllers")

const { getledcontrollers, getdmxcontrollers, getsignaldistribution, getdecorderandamplifiers, getprocessors } = require("../controllers/Product-Controllers/ControllerDistributionAndInterfaces/controllersdistibutionandinterfaces-controllers")

const { gettruss, getclamps, getalluminiumprofile, getsiliconprofile, getstagelightingsystem, getstudiolightingsystem } = require("../controllers/Product-Controllers/Rigging/rigging-controllers")

const { getconnector } = require("../controllers/Product-Controllers/SpaersAndAccessories/spaceandaccessories-controllers")

const router = express.Router()

router.route("/getdecorativeproducts").get(getdecorativeProduct)

router.route("/getinteriorproducts").get(getinteriorProduct)

router.route("/getexteriorproducts").get(getexteriorProduct)

router.route("/getentertainmentproducts").get(getentertainmentProduct)

router.route("/getledstripproducts").get(getledstripProduct)


// Lighting Fixtures

// Architecture
router.route("/getcommercials").get(getcommercials)
router.route("/getdynamicfacade").get(getdynamicfacade)
router.route("/getlandscapes").get(getlandscapes)
router.route("/getmuseums").get(getmuseums)
router.route("/getresidentials").get(getresidentials)

// Entertainment
router.route("/getmovingheadserieslamp").get(getmovingheadserieslamp)
router.route("/getmovingheadseriesled").get(getmovingheadseriesled)
router.route("/getstaticled").get(getstaticled)
router.route("/geteffectslight").get(geteffectslight)

// LED Pixels
router.route("/getstrips").get(getstrips)
router.route("/getdotpixels").get(getdotpixels)
router.route("/getledmatrix").get(getledmatrix)


// Decorative
router.route("/getchandeliers").get(getchandeliers)

// Threater Studio television
router.route("/getthreater").get(getthreater)
router.route("/getstudio").get(getstudio)
router.route("/gettelevision").get(gettelevision)




// Video Displays
router.route("/getrentalseries").get(getrentalseries)
router.route("/getindoorseries").get(getindoorseries)
router.route("/getoutdoorseries").get(getoutdoorseries)




// Controllers Distribution And Interfaces
router.route("/getledcontrollers").get(getledcontrollers)
router.route("/getdmxcontrollers").get(getdmxcontrollers)
router.route("/getsignaldistribution").get(getsignaldistribution)
router.route("/getdecorderandamplifiers").get(getdecorderandamplifiers)
router.route("/getprocessors").get(getprocessors)




// Rigging
router.route("/gettruss").get(gettruss)
router.route("/getclamps").get(getclamps)
router.route("/getalluminiumprofile").get(getalluminiumprofile)
router.route("/getsiliconprofile").get(getsiliconprofile)
router.route("/getstagelightingsystem").get(getstagelightingsystem)
router.route("/getstudiolightingsystem").get(getstudiolightingsystem)




// Spaers And Accessories
router.route("/getconnector").get(getconnector)



module.exports = router