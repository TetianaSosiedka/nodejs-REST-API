const { User } = require("../schemas/user");

const addUser = ({
  password,
  email,
  subscription,
  avatarURL,
  verificationToken,
}) => {
  return User.create({
    password,
    email,
    subscription,
    avatarURL,
    verificationToken,
  });
};

module.exports = addUser;
