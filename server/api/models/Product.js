const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

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
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
