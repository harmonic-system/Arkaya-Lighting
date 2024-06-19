const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');

const userSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  confirmPassword: {
    type: String,
    required: true
  },

  isAdmin: {
    type: Boolean,
    default: false
  }


}, {
  timestamps: true
})

// To Encruypt Password

userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) {
    next()
  }
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(this.password, salt)
    const hashconfirm_password = await bcrypt.hashSync(this.confirmPassword, salt)
    this.password = hashPassword
    this.confirmPassword = hashconfirm_password
  }
  catch (error) {
    next(error)
  }

})

// To Compare Password

// userSchema.methods.comparePassword = function (password) {
//   return bcrypt.compare(password, this.password)
// }


userSchema.methods.comparePassword = function (password){
  return bcrypt.compare(password,this.password);
}

// To generate Token

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign({
      userid: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d"
    })

  } catch (error) {
    next(error);
  }
}

const User = new model("User", userSchema)

module.exports = User