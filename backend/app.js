const express = require("express");
const router = require("./routes/productRoutes");
const app = express();
const errorHandlerMiddlware = require("./middlewares/error");
const authRouter = require("./routes/authRoute");

app.use(express.json());

app.use("/api/v1", router);
app.use("/api/v1", authRouter);

// Hanlded Error
app.use(errorHandlerMiddlware);

module.exports = app;
