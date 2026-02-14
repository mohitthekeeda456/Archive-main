const express = require("express");
const router = express.Router();
const { getCart, updateCart } = require("../controllers/cartController");

router.route("/:userId").get(getCart).put(updateCart);

module.exports = router;