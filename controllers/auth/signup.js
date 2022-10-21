const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

const { RequestError } = require("../../helpers");

const service = require("../../service/users");

const signup = async (req, res) => {
  const { SECRET_KEY } = process.env;

  const { password, email, subscription } = req.body;
  const user = await service.findUser(email);
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const result = await service.addUser({
    password: hashPassword,
    email,
    subscription,
    avatarURL,
  });

  const payload = {
    id: result._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await service.loginUser(result._id, token);
  console.log(result);

  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = signup;
