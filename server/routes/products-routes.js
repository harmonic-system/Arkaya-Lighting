const express = require("express")
const { getdecorativeProduct, getinteriorProduct, getexteriorProduct, getentertainmentProduct, getledstripProduct } = require("../controllers/products-controllers")
const { getcommercials, getdynamicfacade, getlandscapes, getmuseums, getresidentials,
  getmovingheadserieslamp, getmovingheadseriesled, getstaticled, geteffectslight,
  getstrips, getdotpixels, getledmatrix,
  getchandeliers,
  getthreater, getstudio, gettelevision } = require("../controllers/Product-Controllers/LightingFixtures/lightingfixtures-controllers")

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
// router.route("/get")




// Controllers Distribution And Interfaces
// router.route("/get")




// Rigging
// router.route("/get")




// Spaers And Accessories
// router.route("/get")












module.exports = router