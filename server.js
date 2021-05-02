const express = require("express");
const passport = require("passport");
const db = require("./config/db_connection");
const users = require("./routes/api/users");
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));

// connecting to cosmosDB
db();

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// setting up the port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on PORT: ${port}!`));
