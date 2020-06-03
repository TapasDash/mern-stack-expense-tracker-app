const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

router.route("/").get(getTransactions).post(addTransaction);
//If we make a GET request to "/"" i.e transactionRoute through server.js
//Then we wanna call getTransactions from transactionController

//But If we make a POST request to "/"" i.e transactionRoute through server.js
//Then we wanna call addTransaction from transactionController

//We have to make separate router for deleteTransaction as it id as parameter
router.route("/:id").delete(deleteTransaction);
//If we make a DELETE request to "/:id"" which is an additional parameter
//Then we wanna call deleteTransaction from transactionController

module.exports = router;
