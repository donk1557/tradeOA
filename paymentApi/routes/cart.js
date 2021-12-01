const Order = require("../models/Order");
const{
    verifyToken,
    verifyTokenandAdmin,
    verifyTokenandAuth,
} = require("./verifyToken")
const router = require("express").Router();

//create
router.post("/", verifyToken ,async(req,res)=>{
    const newOrder = new Order(req.body)
    try{
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err)
    }
});


router.put("/:id", verifyTokenandAuth, async (req,res)=>{
   
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
          {  $set: req.body
        },{new:true});
        res.status(200).json(updatedCart)
    }catch(err){res.status(500).json(err);
    }
});

//delete
router.delete("/:id", verifyTokenandAuth async (req,res)=>{
    try{
       const cart = await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart Deleted")
    }catch(err){
        res.status(500).json(err)
    }
});
//get 

router.get("/find:userid", verifyTokenandAuth, async (req,res)=>{
    try{
      const cart = await Cart.findOne({userId: req.params.userId});
     
      res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
});

//get all 
router.get("/", verifyTokenandAdmin, async (req,res)=>{
    try{
     const carts =await Cart.find;
     
    res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;