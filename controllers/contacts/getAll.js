const { listContacts } = require("../../service/contacts");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  const query = req.query;

  const result = await listContacts({ owner, query });
  res.status(200).json(result);
};

module.exports = getAll;
