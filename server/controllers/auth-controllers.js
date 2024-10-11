const User = require("../models/user-models")

const signUP = async (req, res, next) => {
  try {
    const { name, email, phone, organization, password, confirmPassword } = req.body

    // console.log(name, email, phone, organization, password, confirmPassword);

    const existedUser = await User.findOne({ email })

    if (existedUser) {
      return res.status(400).json({ message: "User Already Exist" })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Must Be Same" })
    }

    const usercreated = await User.create({ name: name.trim().toLowerCase(), email: email.trim().toLowerCase(), phone: phone.trim(), organization: organization.trim(), password: password.trim() })


    const user = await User.findById(usercreated._id).select('-password');
    // const options = {
    //   httpOnly: true,
    //   secure: true
    // }

    // res.status(201).cookie("Token", await user.generateToken(), options).json({ message: "Registration Successful", token: await user.generateToken(), userId: user._id.toString() })
    return res.status(201).json({ message: "Registration Successful", token: await user.generateToken(), data: user })

  }

  catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {

  try {

    const { email, password } = req.body
    // console.log(email, password);
    

    const userExist = await User.findOne({ email })
    // console.log(userExist);


    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" })
    }

    const isPasswordCorrect = await userExist.comparePassword(password)
    // console.log(user);


    if (isPasswordCorrect) {
      const user = await User.findById(userExist.id).select('-password')
      return res.status(200).json({ message: "Login Successfully", token: await userExist.generateToken(), data: user })
    }
    else {
      return res.status(401).json({ message: "Invalid Email Id or Password" })
    }

  } catch (error) {
    next(error)
  }

}

const user = async (req, res, next) => {
  try {
    const userData = req.user
    return res.status(200).json({ data: userData })
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
//       return res.status(200).json({ message: "Profile Updated Successfully", updatedUser })
//     }

//   } catch (error) {
//     next(error)
//   }
// }


module.exports = { signUP, login, user }