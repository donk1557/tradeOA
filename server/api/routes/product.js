const router = require("express").Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {    
    Product.find().sort({ _id: -1 }).limit(6)
        .then((listedProds) => {
          console.log(listedProds);
          res.json(listedProds);
        })
        .catch((err) => {
          res.json(err);
        });
  });

  router.get(":/id", async (req, res) => {    
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  });

router.post("/", async (req, res) => {    //auth
  const newProd = new Product(req.body);
  try {
    const savedProd = await newProd.save();
    res.json(savedProd);
  } catch (err) {
    console.log(err);
  }
});

router.put(":/id", async (req, res) => {   //auth
    try{
  const updateProd = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(updateProd);
    }catch (err) {
        console.log(err);
    }
});

router.delete(":/id", async (req, res) => {  //auth
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json("item deleted...");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
