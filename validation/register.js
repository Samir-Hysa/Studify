const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //Convert empty field with empty string so we can use validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.surname = !isEmpty(data.surname) ? data.surname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // name and surname check

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (validator.isEmpty(data.surname)) {
    errors.surname = "surname field is required";
  }

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

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "A confirm password is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "min 6 characters | max 30 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
