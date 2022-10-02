const contacts = require("../models/contacts");
const RequestError = require("../helpers/RequestError");
const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
});

const updateById = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError("400", "missing required name field");
  }
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw RequestError("404", "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
