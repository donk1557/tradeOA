const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const ProductSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  sell: [
    {
      type: mongoose.ObjectId,
      ref: User,
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
