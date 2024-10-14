require('dotenv').config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./Database/connectDB")
const authRoute = require('./routes/auth-routes')
const contactRoute = require("./routes/contact-routes")
const applicationRoute = require("./routes/application-routes")
const productQueryRoute = require("./routes/productQuery-routes")
const newsletterRoute = require("./routes/newsletter-routes")
const errormiddleware = require('./middleware/error-middleware')

const adminRoutes = require("./routes/Admin-Routes/admin-routes")

const adminApplicationRoutes = require("./routes/Admin-Routes/AdminApplication-Routes/AdminApplication-Routes")

const productRoutes = require("./routes/products-routes")

const adminproductsRoute = require("./routes/Admin-Routes/AdminProduct-Routes/AdminProduct-Routes")

const homecontentRoutes = require("./routes/homecontent-routes")

const adminhomecontentRoutes = require("./routes/Admin-Routes/AdminHomeContent-Routes/Adminhomecontent-routes")

// admin products routes

// lighting fixture
const adminArchitectureRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminLightingFixtures-Routes/AdminArchitecture-Routes/AdminArchitecture-Routes")
const adminEntertainmentRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminLightingFixtures-Routes/AdminEntertainment-Routes/AdminEntertainment-Routes")
const adminLedPixelsRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminLightingFixtures-Routes/AdminLEDPixels-Routes/AdminLEDPixels-Routes")
const adminDecorativeRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminLightingFixtures-Routes/AdminDecorative-Routes/AdminDecorative-Routes")
const adminThreaterStudioTelevisionRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminLightingFixtures-Routes/AdminThreaterSudioTelevision-Routes/AdminThreaterStudioTelevision-Routes")


// video displays
const adminRentalSeriesRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminVideoDisplays-Routes/AdminRentalSeries-Routes/AdminRentalSeries-Routes")
const adminIndoorSeriesRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminVideoDisplays-Routes/AdminIndoorSeries-Routes/AdminIndoorSeries-Routes")
const adminOutdoorSeriesRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminVideoDisplays-Routes/AdminOutdoorSeries-Routes/AdminOutdoorSeries-Routes")


// controller distribution & interfaces
const adminLedControllersRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminControllerDistributionAndInterfaces-Routes/AdminLEDControllers-Routes/AdminLEDControllers-Routes")
const adminDmxControllersRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminControllerDistributionAndInterfaces-Routes/AdminDMXControllers-Routes/AdminDMXControllers-Routes")
const adminsignaldistributionandpowersupplyRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminControllerDistributionAndInterfaces-Routes/AdminSignalDistribution&PowerSupply-Routes/AdminSignalDistributionAndPowerSupply-Routes")
const adminDecorderAmplifiersRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminControllerDistributionAndInterfaces-Routes/AdminDecorderAndAmplifier-Routes/AdminDecorderAndAmplifier-Routes")
const adminProcessorsRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminControllerDistributionAndInterfaces-Routes/AdminProcessor-Routes/AdminProcessor-Routes")


// rigging
const adminTrussRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminRigging-Routes/AdminTruss-Routes/AdminTruss-Routes")
const adminClampsRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminRigging-Routes/AdminClamps-Routes/AdminClamps-Routes")
const adminAlluminiumProfileRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminRigging-Routes/AdminAlluminiumProfile-Routes/AdminAlluminiumProfile-Routes")
const adminSiliconProfileRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminRigging-Routes/AdminSiliconProfile-Routes/AdminSiliconProfile-Routes")
const adminStageLightingSystemRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminRigging-Routes/AdminStageLightingSystem-Routes/AdminStageLightingSystem-Routes")
const adminStudioLightingSystemRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminRigging-Routes/AdminStudioLightingSystem-Routes/AdminStudioLightingSystem-Routes")


// spaers and accessories
const adminConnectorsRoutes = require("./routes/Admin-Routes/AdminProduct-Routes/AdminSpaersAndAccessories-Routes/AdminConnectors-Routes/AdminConnectors-Routes")


const app = express()

const corsOption = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true
}

app.use(cors(corsOption))
app.use(express.json())

const PORT = 4000

app.get("/", (_, res) => {
  res.send("Welcome To Arkaya Lighting System,<br><br>Server Is Running.........")
})

app.use("/api/v1/auth", authRoute)

app.use("/api/v1/contact", contactRoute)

app.use("/api/v1/application", applicationRoute)

app.use("/api/v1/productquery", productQueryRoute)

app.use("/api/v1/newsletter", newsletterRoute)

app.use("/api/v1/admin", adminRoutes)

app.use("/api/v1/adminapplication", adminApplicationRoutes)

app.use("/api/v1/homecontent", homecontentRoutes)

app.use("/api/v1/adminhomecontent", adminhomecontentRoutes)


app.use("/api/v1/adminproducts", adminproductsRoute)


// all products
app.use("/api/v1/products", productRoutes)

// lighting fixture
app.use("/api/v1/lightingfixture/adminarchitecture", adminArchitectureRoutes)
app.use("/api/v1/lightingfixture/adminentertainment", adminEntertainmentRoutes)
app.use("/api/v1/lightingfixture/adminledpixels", adminLedPixelsRoutes)
app.use("/api/v1/lightingfixture/admindecorative", adminDecorativeRoutes)
app.use("/api/v1/lightingfixture/adminthreaterstudiotelevision", adminThreaterStudioTelevisionRoutes)

// video displays
app.use("/api/v1/videodisplays/adminindoorseries", adminIndoorSeriesRoutes)
app.use("/api/v1/videodisplays/adminoutdoorseries", adminOutdoorSeriesRoutes)
app.use("/api/v1/videodisplays/adminrentalseries", adminRentalSeriesRoutes)

// controller distribution & interfaces
app.use("/api/v1/controllerdistributioninterfaces/adminledcontrollers", adminLedControllersRoutes)
app.use("/api/v1/controllerdistributioninterfaces/admindmxcontrollers", adminDmxControllersRoutes)
app.use("/api/v1/controllerdistributioninterfaces/adminsignaldistributionandpowersupply", adminsignaldistributionandpowersupplyRoutes)
app.use("/api/v1/controllerdistributioninterfaces/admindecorderamplifiers", adminDecorderAmplifiersRoutes)
app.use("/api/v1/controllerdistributioninterfaces/adminprocessors", adminProcessorsRoutes)

// rigging
app.use("/api/v1/rigging/admintruss", adminTrussRoutes)
app.use("/api/v1/rigging/adminclamps", adminClampsRoutes)
app.use("/api/v1/rigging/adminalluminiumprofile", adminAlluminiumProfileRoutes)
app.use("/api/v1/rigging/adminsiliconprofile", adminSiliconProfileRoutes)
app.use("/api/v1/rigging/adminstagelightingsystem", adminStageLightingSystemRoutes)
app.use("/api/v1/rigging/adminstudiolightingsystem", adminStudioLightingSystemRoutes)

// spaers and accessories
app.use("/api/v1/spaersaccessroies/adminconnectors", adminConnectorsRoutes)


app.use(errormiddleware)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
  })
})

