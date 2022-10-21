const { User } = require("../schemas/user");

const addUser = ({ password, email, subscription, avatarURL }) => {
  return User.create({
    password,
    email,
    subscription,
    avatarURL,
  });
};

module.exports = addUser;
