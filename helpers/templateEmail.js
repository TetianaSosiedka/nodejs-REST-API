const templateEmail = (verificationToken, email) => {
  const { BASE_URL } = process.env;

  return {
    to: email,
    subject: "Confirm singup",
    text: "For confirm your mail click on the button below",
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}">Click on for confirm mail</a>`,
  };
};

module.exports = templateEmail;
