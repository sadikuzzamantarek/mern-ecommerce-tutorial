const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.LOCAL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Conencted to ${conn.connection.host}`);
    });
};
module.exports = connectDatabase;
