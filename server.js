const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" }); //specifying where .env file is

connectDB(); // it will connect to mongo DB database

const transactions = require("./routes/transactionRoute");

const app = express();

app.use(express.json()); //it will all us to use bodyParser

if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions); //to use transactionRoute on the url
//it will fire transactionRoute response on "/api/v1/transactions" url

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
