const { listContacts } = require("../service/index");

const getAll = async (req, res) => {
  const result = await listContacts();
  res.status(200).json(result);
};

module.exports = getAll;
