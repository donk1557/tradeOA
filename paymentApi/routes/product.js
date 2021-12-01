const Product = require("../models/Product");
const{
    verifyToken,
    verifyTokenandAdmin,
    verifyTokenandAuth,
} = require("./verifyToken")
const router = require("express").Router();

//create
router.post("/", verifyTokenandAdmin ,async(req,res)=>{
    const newProduct = new Product(req.body)
    try{
        res.status(200).json(savedProduct);
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
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
          {  $set: req.body
        },{new:true});
        res.status(200).json(updatedProduct)
    }catch(err){res.status(500).json(err);
    }
});

//delete
router.delete("/:id", verifyTokenandAdmin, async (req,res)=>{
    try{
       const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product Deleted")
    }catch(err){
        res.status(500).json(err)
    }
});
//get 

router.get("/find:id", async (req,res)=>{
    try{
      const product = await User.findById(req.params.id)
     
      res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
});

//get all 
router.get("/", async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
     let products;
     if(qNew){
         products = await Product.find().sort()({createdAt: -1}).limit(5)
     }else if(qCategory){
         products = await Product.find({categories:{
             $in:[qCategory],
         }})
     }else{
         products =await Product.find();
     }
    res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;