const express = require("express");

const ctrl = require("../../controllers/auth");

const ctrlWrapper = require("../../helpers/ctrlWraper");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../service/schemas/user");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.signupShema),
  ctrlWrapper(ctrl.signup)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  validateBody(schemas.updataAvatarSchema),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;