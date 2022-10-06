const { Contact } = require("./schemas/contactSchemas");

const updateStatusContact = (id, data) => {
  return Contact.findByIdAndUpdate(id, data);
};

module.exports = updateStatusContact;
