const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //Convert empty field with empty string so we can use validator
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // email empty or incorrect check

  if (validator.isEmpty(data.email)) {
    errors.email = "An email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invaliid";
  }

  //checking the two passwords
  if (validator.isEmpty(data.password)) {
    errors.password = "A password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
