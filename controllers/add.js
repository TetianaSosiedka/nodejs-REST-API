const { schemas } = require("../service/schemas/contactSchemas");
const RequestError = require("../helpers/RequestError");
const { addContact } = require("../service/index");

const add = async (req, res) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw RequestError("400", "missing required name field");
  }
  const result = await addContact(req.body);

  res.status(201).json(result);
};

module.exports = add;
