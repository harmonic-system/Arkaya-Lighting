const nodemailer = require("nodemailer");
const NewsLetter = require("../models/newsLetter-models");

const newsLetter = async (req, res, next) => {
  try {
    const { newsletteremail } = req.body;

    const existednewsletter = await NewsLetter.findOne({newsletteremail})

    if (existednewsletter) {
      return res.status(409).json({ message: "Already Subscribed" })
    }

    await NewsLetter.create({ newsletteremail: newsletteremail.toLowerCase().trim() })

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
      subject: "Welcome to Arkaya Lighting Newsletter",
      html: `
      <h3>Dear ${newsletteremail}</h3> 
      <p>We are thrilled to welcome you to the arkayalighting newsletter community!</p>
      <br>
       <p>Thank you for subscribing and choosing to stay updated with us.</p>
       <br>
       <p>At arkayalighting, we are dedicated to providing you with valuable insights, updates, and exclusive offers that we believe will enhance your experience with us. Whether it's the latest industry trends, tips and tricks, or special promotions, we aim to keep you informed and engaged.</p>
       <br>
       <p>We value your trust in us and look forward to sharing meaningful content that aligns with your interests. Your subscription allows us to stay connected and ensures you receive firsthand information on everything arkayalighting has to offer.</p>
       <br>
       <p>If you have any questions, feedback, or specific topics you'd like us to cover, please don't hesitate to reach out.</p> 
       <p> We are here to serve you.</p>
       <p>Once again, thank you for joining us on this journey. We are excited to have you onboard!</p>
       <p><b>Regards -</b> Arkaya Lighting</p>
       `
      //  <p>Now you will get regular Updates regarding our new Products and Offers</p>
    }

    transporter.sendMail(mailOption, (error) => {
      if (error) {
        // console.log(error, "to client")
        return res.status(500).json({ message: "Failed To Subscribe" })
      }
      else {
        return res.status(200).json({ message: "Thanks For Subscribing" })
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
        return res.status(500).json({ message: "Failed To Subscribe" })
      }
      else {
        // console.log("New Subscriber Email Sent")
        return res.status(200).json({ message: "Thanks For Subscribing" })
      }
    })

  } catch (error) {
    next(error)
  }
}

module.exports = newsLetter;