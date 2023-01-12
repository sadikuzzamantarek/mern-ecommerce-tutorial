const { registerUser } = require("../controllers/authController");

const authRouter = require("express").Router();
// register user
authRouter.route("/register").post(registerUser);

module.exports = authRouter;
