const nodemailer = require("nodemailer");
const NewsLetter = require("../models/newsLetter-models");

const newsLetter = async (req, res, next) => {
  try {
    const { newsletteremail } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "arkayalighting@gmail.com",
        pass: "qztiixbfbwqrskja"
      }
    })

    let mailOption = {
      from: "arkayalighting@gmail.com",
      to: newsletteremail,
      subject: "Thanks For Subscribing Our NewsLetter",
      html: `
      <h1>Thankyou For Joining Us</h1>
      <p>Now you will get regular Updates regarding our new Products and Offers</p>
      `
    }

    transporter.sendMail(mailOption, (error) => {
      if (error) {
        // console.log(error, "to client")
        return res.status(500).json({ message: "Failed to send Email" })
      }
      else {
        return res.status(200).json({ message: "Email Sent Successfully" })
      }
    })

    mailOption = {
      to: "arkayalighting@gmail.com",
      subject: "New Subscriber",
      html: `
      <p>${newsletteremail} is our new subscriber</p>
      `
    }

    transporter.sendMail(mailOption, (error) => {
      if (error) {
        // console.log(error, "to admin")
        return res.status(500).json({ message: "Failed to send Email" })
      }
      else {
        // console.log("New Subscriber Email Sent")
        return res.status(200).json({ message: "New Subscriber Email Sent" })
      }
    })

    await NewsLetter.create({ newsletteremail: newsletteremail.toLowerCase().trim() })


  } catch (error) {
    next(error)
  }
}

module.exports = newsLetter;