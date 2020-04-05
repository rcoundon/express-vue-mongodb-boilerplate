const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");

router
  .route("/")
  .get(ItemController.list)
  .post(ItemController.create);

router
  .route("/:id")
  .get(ItemController.read);

module.exports = router;
