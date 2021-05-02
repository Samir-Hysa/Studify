const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a Schema for our User (this will define all the values that a user should have inside the database)

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// this line will export this Schema and select a name for the database: "users" in our case
module.exports = User = mongoose.model("users", UserSchema);
