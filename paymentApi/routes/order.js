const Product = require("../models/Product");
const{
    verifyToken,
    verifyTokenandAdmin,
    verifyTokenandAuth,
} = require("./verifyToken")
const router = require("express").Router();

//create
router.post("/", verifyToken ,async(req,res)=>{
    const newCart = new Cart(req.body)
    try{
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", verifyTokenandAdmin, async (req,res)=>{
    try{
      const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
    res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
});

router.put("/:id", verifyTokenandAdmin, async (req,res)=>{
   
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
          {  $set: req.body
        },{new:true});
        res.status(200).json(updatedOrder)
    }catch(err){res.status(500).json(err);
    }
});

//delete
router.delete("/:id", verifyTokenandAdmin, async (req,res)=>{
    try{
       const order = await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order Deleted")
    }catch(err){
        res.status(500).json(err)
    }
});
//get 

router.get("/find:userid", verifyTokenandAuth, async (req,res)=>{
    try{
      const orders = await Order.find({userId: req.params.userId});
     
      res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
});

//get all 
router.get("/", verifyTokenandAdmin, async (req,res)=>{
    try{
     const orders =await Order.find;
     
    res.status(200).json(order);
    }catch(err){
        res.status(500).json(err)
    }
});

//get income
router.get("/income", verifyTokenandAdmin, async (req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const PrevMonth = new Date(new date().setMonth(lastMonth.getMonth()-1));

    try{
        const income = await Order.aggregate([
            {$match: {
                createdAt: {$gte: previousMonth},
            $project:{
                month: {$month: "$createdAt"},
            },
            $group:{
                _id:"$month",
                total: {$sum: "$sales"}
            }
            },
        },
        ]); res.status(200).json(income);
    }catch(err){
        res.status(500)
    }
});

module.exports = router;