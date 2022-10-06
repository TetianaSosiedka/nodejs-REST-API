const { schemas } = require("../service/schemas/contactSchemas");
const { updateContact } = require("../service/index");
const RequestError = require("../helpers/RequestError");

const updateById = async (req, res) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw RequestError("400", "missing required name field");
  }
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    throw RequestError("404", "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
