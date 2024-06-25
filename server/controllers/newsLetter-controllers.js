const nodemailer = require("nodemailer");
const NewsLetter = require("../models/newsLetter-models");

const newsLetter = async (req, res, next) => {
  try {
    const { newsletteremail } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "ananddwivedi1313@gmail.com",
        pass: "dmuoadpxddarwhbo"
      }
    })

    let mailOption = {
      from: "ananddwivedi1313@gmail.com",
      to: newsletteremail,
      subject: "Thanks For Subscribing Our NewsLetter",
      html: `
      <h1>Thankyou For Joining Us</h1>
      <p>Now youn will get regular Updates regarding our new Products and Offers</p>
      `
    }

    transporter.sendMail(mailOption, (error) => {
      if (error) {
        console.log(error, "to client")
        res.status(500).json({ message: "Failed to send Email" })
      }
      else {
        res.status(200).json({ message: "Email Sent Successfully" })
      }
    })

    mailOption = {
      to: "ananddwivedi1313@gmail.com",
      subject: "New Subscriber",
      html: `
      <p>${newsletteremail} is our new subscriber</p>
      `
    }

    transporter.sendMail(mailOption, (error) => {
      if (error) {
        console.log(error, "to admin")
        res.status(500).json({ message: "Failed to send Email" })
      }
      else {
        console.log("New Subscriber Email Sent")
        res.status(200).json({ message: "New Subscriber Email Sent" })
      }
    })

    await NewsLetter.create({ newsletteremail: newsletteremail.toLowerCase().trim() })


  } catch (error) {
    next(error)
  }
}

module.exports = newsLetter;