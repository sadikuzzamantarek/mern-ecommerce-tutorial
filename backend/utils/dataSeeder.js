const Products = require("../models/productModel");
const connectDatabase = require("../config/database");
const product = require("../data/productData.json");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const dataSeeder = async () => {
  try {
    await Products.deleteMany();
    console.log(`Products deleted successfully`);
    await Products.insertMany(product);
    console.log(`Products inserted successfully`);
  } catch (error) {
    console.log(error.message);
  }
};

dataSeeder();
