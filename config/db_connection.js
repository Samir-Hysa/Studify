import mongoose from "mongoose";

// declaring the function that we will use inside server.js
const db_connection = () => {
  //DB config
  const connection_url =
    "mongodb://studify:xrHYVa7QJ7j9sWBY1X2Hs3yIpULjGxWO7L7aLbMPuZUZRpOasCTcxuYu6l4Nm4dcqj5uS3Ad8HHv4aQQSx3otw==@studify.mongo.cosmos.azure.com:10255/studify-db?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@studify@";

  mongoose.connect(
    connection_url,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log("Error connecting to cosmosDB");
      else console.log("connection established to cosmos");
    }
  );
};

export default db_connection;
