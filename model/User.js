const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  mobileNumber: {
    type: Number,
    require: true,
    minlength: 10,
    maxlength: 10
  },
  loginType: {
    type: String,
    enum: ['facebook', 'google', 'email'],
    default: 'email'
  },
  profilePicture: {
    type: String,
    default: null
  },
  role: {
    type: Number,
    default: 1
  },
  isVerified: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: false
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
