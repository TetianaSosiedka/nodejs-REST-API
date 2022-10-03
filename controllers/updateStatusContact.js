const { Contact, schemas } = require("../models/contact");
const RequestError = require("../helpers/RequestError");

const updateStatusContact = async (req, res) => {
  const { error } = schemas.updateFavoriteSchema.validate(req.body);
  if (error) {
    throw RequestError("400", "missing required name field");
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError("404", "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateStatusContact;
