const { Contact } = require("./schemas/contactSchemas");

const addContact = (data) => {
  return Contact.create(data);
};

module.exports = addContact;
