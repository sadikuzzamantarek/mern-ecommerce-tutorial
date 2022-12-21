const express = require("express");
const router = require("./routes/productRoutes");
const app = express();
const errorHandlerMiddlware = require("./middlewares/error");

app.use(express.json());

app.use("/api/v1", router);

// Hanlded Error
app.use(errorHandlerMiddlware);

module.exports = app;
