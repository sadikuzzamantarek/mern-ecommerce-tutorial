const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Connecting to the server
dotenv.config({ path: "backend/config/config.env" });

// Uncaught exceptions error handling

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down to Uncaught Exception`);
  process.exit(1);

});



// connecting to the mongo db database

connectDatabase();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Alive at ${process.env.PORT} and mode ${process.env.NODE_ENV}`);
});

// Handle Unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Server shutting down to unhandledRejection`);
  server.close(() => {
    process.exit(1);
  });
});
