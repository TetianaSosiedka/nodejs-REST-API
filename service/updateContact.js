const { Contact } = require("./schemas/contactSchemas");

const updateContact = (id, data) => {
  return Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
};

module.exports = updateContact;
