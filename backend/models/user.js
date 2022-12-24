const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    maxlength: [40, "Name cannot exceed 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter an Email"],
    validate: [validator.isEmail, "Please enter a valid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [8, "Please enter at least 8 Charecters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("Users", userSchema);
