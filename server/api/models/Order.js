const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require('./Product');

const OrderSchema = new Schema({

  id: mongoose.ObjectId,

  purchaseDate: {
        type: Date,
        default: Date.now
      },
      products: [
        {
          type: mongoose.ObjectId,
          ref: Product
        }
      ]

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;