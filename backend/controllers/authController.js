const Users = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");

// Registering users
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await Users.create({
      name,
      email,
      password,
      avatar: {
        public_id: "products/dsvbpny402gelwugv2le",
        url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
      },
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
