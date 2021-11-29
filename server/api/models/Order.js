const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
      ]

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;