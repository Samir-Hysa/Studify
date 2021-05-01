import express from "express";
import mongoose from "mongoose";
import db from "./config/db_connection.js";

const app = express();
app.use(express.json());

// connecting to cosmosDB
db();

// setting up the port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on PORT: ${port}!`));
