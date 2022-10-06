const { Contact } = require("./schemas/contactSchemas");

const getContactById = (id) => {
  return Contact.findById(id);
};

module.exports = getContactById;
