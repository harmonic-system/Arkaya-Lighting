const User = require("../models/user-models")

const signUP = async (req, res, next) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body

    const existedUser = await User.findOne({ email })

    if (existedUser) {
      return res.status(400).json({ message: "User Already Exist" })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Must Be Same" })
    }

    const user = await User.create({ name: name.toLowerCase().trim(), email: email.toLowerCase().trim(), phone: phone.trim(), password: password.trim(), confirmPassword: confirmPassword.trim() })

    // const options = {
    //   httpOnly: true,
    //   secure: true
    // }

    // res.status(201).cookie("Token", await user.generateToken(), options).json({ message: "Registration Successful", token: await user.generateToken(), userId: user._id.toString() })
    res.status(201).json({ message: "Registration Successful", token: await user.generateToken(), userId: user._id.toString() })

  }

  catch (error) {
    next(error)
  }
}


const login = async (req, res, next) => {

  try {
    const { email, password } = req.body

    const userExist = await User.findOne({ email })

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" })
    }

    const user = await userExist.comparePassword(password)

    if (user) {
      res.status(200).json({ message: "Login Successfully", token: await userExist.generateToken(), userId: userExist._id.toString() })
    }
    else {
      res.status(401).json({ message: "Invalid Email Id or Password" })
    }

  } catch (error) {
    next(error)
  }

}

const user = async (req, res, next) => {
  try {
    const userData = req.user

    // console.log(userData);
    // console.log(userData._id.toString());

    return res.status(200).json({ userData: userData })

  }
  catch (error) {
    next(error)
  }
}

// const editprofile = async (req, res, next) => {
//   try {
//     const id = req.params.id

//     const { name, email, phone, password, confirmPassword } = req.body

//     const updatedUser = await User.updateOne({ _id: id }, { $set: { name: name, email: email, phone: phone, password: password, confirmPassword: confirmPassword } })

//     // const updateUser = await User.findByIdAndUpdate({ _id: id }, { $set: { name: name, email: email, phone: phone, password: password, confirmPassword: confirmPassword } })

//     if (updatedUser) {
//       res.status(200).json({ message: "Profile Updated Successfully", updatedUser })
//     }

//   } catch (error) {
//     next(error)
//   }
// }


module.exports = { signUP, login, user }