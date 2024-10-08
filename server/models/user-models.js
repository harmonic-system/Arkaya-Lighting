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

  organization: {
    type: String,
  },

  password: {
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
    this.password = hashPassword
  }
  
  catch (error) {
    next(error)
  }

})

// To Compare Password

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
      expiresIn: "1d"
    })

  } catch (error) {
    next(error);
  }
}

const User = new model("User", userSchema)

module.exports = User


