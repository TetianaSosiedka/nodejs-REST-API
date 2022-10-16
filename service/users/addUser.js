const { User } = require("../schemas/user");

const addUser = ({ password, email, subscription }) => {
  return User.create({
    password,
    email,
    subscription,
  });
};

module.exports = addUser;
