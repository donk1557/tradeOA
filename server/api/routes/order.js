const router = require("express").Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  //auth
  Order.find()
    .sort({ _id: -1 })
    .limit(6)
    .then((listedOrders) => {
      console.log(listedOrders);
      res.json(listedOrders);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete(":/id", async (req, res) => {
  //auth
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json("order deleted...");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
