const { getContactById } = require("../service/index");
const RequestError = require("../helpers/RequestError");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result) {
    throw RequestError("404", "Not found");
  }
  res.status(200).json(result);
};

module.exports = getById;
