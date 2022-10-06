const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/index");
const ctrlWrapper = require("../../helpers/ctrlWraper");
const { isValidId } = require("../../middlewares/index");

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, ctrlWrapper(controllers.getById));

router.post("/", ctrlWrapper(controllers.add));

router.delete("/:contactId", isValidId, ctrlWrapper(controllers.removeById));

router.put("/:contactId", isValidId, ctrlWrapper(controllers.updateById));

router.patch(
  "/:contactId/favorite",
  isValidId,
  ctrlWrapper(controllers.updateStatus)
);

module.exports = router;
