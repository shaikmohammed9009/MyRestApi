const express = require("express");

const router = express.Router();
const {
  getAllProduct,
  getTestingProductAll,
} = require("../Controllers/product");

router.route("/").get(getAllProduct);
router.route("/testing").get(getTestingProductAll);

module.exports = router;
