const { Contact } = require("./schemas/contactSchemas");

const removeContact = (id) => {
  return Contact.findByIdAndDelete(id);
};

module.exports = removeContact;
