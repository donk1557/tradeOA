const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = require("./Order");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  orders: [
    {
      
      ref: Order,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
