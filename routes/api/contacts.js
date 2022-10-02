const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/index");
const ctrlWrapper = require("../../helpers/ctrlWraper");

router.get("/", controllers.getAll);

router.get("/:contactId", ctrlWrapper(controllers.getById));

router.post("/", ctrlWrapper(controllers.add));

router.delete("/:contactId", ctrlWrapper(controllers.removeById));

router.put("/:contactId", ctrlWrapper(controllers.updateById));

module.exports = router;
