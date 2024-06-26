require('dotenv').config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./Database/connectDB")
const authRoute = require('./routes/auth-routes')
const contactRoute = require("./routes/contact-routes")
const productQuerryRoute = require("./routes/productQuerry-routes")
const newsletterRoute = require("./routes/newsletter-routes")
const errormiddleware = require('./middleware/error-middleware')

const adminRoutes = require("./routes/Admin-Routes/admin-routes")

const productRoutes = require("./routes/products-routes")

const adminproductsRoute = require("./routes/Admin-Routes/AdminProduct-Routes/AdminProduct-Routes")

const homecontentRoutes = require("./routes/homecontent-routes")

const adminhomecontentRoutes = require("./routes/Admin-Routes/AdminHomeContent-Routes/Adminhomecontent-routes")

const app = express()

const corsOption = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true
}

app.use(cors(corsOption))
app.use(express.json())

const PORT = 8000

app.use("/api/v1/auth", authRoute)

app.use("/api/v1/contact", contactRoute)

app.use("/api/v1/productquerry", productQuerryRoute)

app.use("/api/v1/newsletter", newsletterRoute)

app.use("/api/v1/admin", adminRoutes)

app.use("/api/v1/products", productRoutes)

app.use("/api/v1/adminproducts", adminproductsRoute)

app.use("/api/v1/homecontent", homecontentRoutes)

app.use("/api/v1/adminhomecontent", adminhomecontentRoutes)


app.use(errormiddleware)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
  })
})

