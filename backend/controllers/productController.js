const Products = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const APIFeature = require("../utils/apiFeature");

// urld products?keyword=apple
exports.getAllProduct = async (req, res, next) => {
  try {
    const resultPerPage = 4;

    const totalProduct = await Products.countDocuments();

    const apiFeature = new APIFeature(Products.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
      success: true,
      message: "Got all products from get request",
      totalProduct,
      count: products.length,
      products,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};

// Adding new products --> admin/products/new

exports.addNewProduct = async (req, res, next) => {
  try {
    const product = await Products.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// Gettng single product information --> products/:_id
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params._id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 400));
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.stack,
    });
  }
};
// Updating single product information --> products/:_id
exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Products.findById(req.params._id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 400));
    }
    product = await Products.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: true,
    });
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
// Delete single product information --> products/:_id
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params._id);
    if (!product) {
      return next(new ErrorHandler("Product not found", 400));
    }
    await product.remove();
    res.status(200).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
