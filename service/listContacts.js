const { Contact } = require("./schemas/contactSchemas");

const listContacts = () => {
  return Contact.find({}, "-createdAt -updatedAt");
};

module.exports = listContacts;
