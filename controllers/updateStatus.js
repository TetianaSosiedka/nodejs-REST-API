const { schemas } = require("../service/schemas/contactSchemas");
const { updateStatusContact } = require("../service");
const RequestError = require("../helpers/RequestError");

const updateStatus = async (req, res) => {
  const { error } = schemas.updateFavoriteSchema.validate(req.body);
  if (error) {
    throw RequestError("400", "missing required name field");
  }
  const { contactId } = req.params;
  const result = await updateStatusContact(contactId, req.body);
  if (!result) {
    throw RequestError("404", "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateStatus;
