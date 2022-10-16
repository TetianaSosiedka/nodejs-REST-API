const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { RequestError } = require("../../helpers");

const { addUser, findUser, loginUser } = require("../../service/users");

const signup = async (req, res) => {
  const { SECRET_KEY } = process.env;

  const { password, email, subscription } = req.body;
  const user = await findUser(email);
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await addUser({ password: hashPassword, email, subscription });

  const payload = {
    id: result._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await loginUser(result._id, token);

  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = signup;
