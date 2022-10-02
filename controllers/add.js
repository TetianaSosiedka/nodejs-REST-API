const contacts = require("../models/contacts");
const RequestError = require("../helpers/RequestError");
const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
});

const add = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError("400", "missing required name field");
  }
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

module.exports = add;
