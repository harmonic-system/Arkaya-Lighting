require('dotenv').config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./Database/connectDB")
const authRoute = require('./routes/auth-routes')
const contactRoute = require("./routes/contact-routes")
const productQuerryRoute = require("./routes/productQuerry-routes")
const errormiddleware = require('./middleware/error-middleware')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 8000

app.use("/api/v1/auth", authRoute)

app.use("/api/v1/contact",contactRoute)

app.use("/api/v1/productquerry", productQuerryRoute)


app.use(errormiddleware)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
  })
})

