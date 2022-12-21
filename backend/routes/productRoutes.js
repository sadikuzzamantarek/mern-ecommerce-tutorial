const {
  getAllProduct,
  addNewProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = require("express").Router();
// For getting all products
router.route("/products").get(getAllProduct);

// adding new products
router.route("/admin/products/new").post(addNewProduct);

// getting single product
router.route("/products/:_id").get(getSingleProduct);

// updating product
router.route("/admin/products/:_id").put(updateProduct);
// delete product
router.route("/admin/products/:_id").delete(deleteProduct);
module.exports = router;
