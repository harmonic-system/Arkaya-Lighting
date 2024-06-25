const jwt = require("jsonwebtoken");
const User = require("../models/user-models");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(500).json({ message: "Unauthorizes Token !! Toekn Not Provided" })
  }

  const jwtToken = token.replace("Bearer", " ").trim()

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)

    const userData = await User.findOne({ email: isVerified.email }).select("-password -confirmPassword")

    req.user = userData
    // console.log(req.user);
    // console.log(req.user.isAdmin);

    next()
  } catch (error) {
    next(error)
  }


}

module.exports = authMiddleware


