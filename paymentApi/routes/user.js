const { verifyTokenandAuth, verifyTokenandAdmin } = require("./verif");
const {verifyToken} = require("./verifyToken");

const router = require("express").Router();

//update
router.put("/:id", verifyTokenandAuth, (req,res)=>{
    if (req.body.password) {
        req.body.password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_W).toString(),
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
          {  $set: req.body
        },{new:true});
        res.status(200).json(updatedUser)
    }catch(err){res.status(500).json(err);
    }
});

//delete

router.delete("/:id", verifyTokenandAuth, async (req,res)=>{
    try{
       await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

//get
router.get("/:id", verifyTokenandAdmin, async (req,res)=>{
    try{
      const user =  await User.findById(req.params.id)
      const {password, ...others} = user._doc;

      res.status(200).json({...others});
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;

