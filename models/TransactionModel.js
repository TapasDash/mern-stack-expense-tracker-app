const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true, //to trim all the whitespaces
    required: [true, "Please add some text"], //it will show this mssg when text would be empty
  },
  amount: {
    type: Number,
    required: [true, "Please add a +ve or -ve number"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    //default's value will kick in if there no date would be specified
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
//here we are expoting Transaction mdoel along with TransactionSchema schema
