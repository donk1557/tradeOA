const router = require("express").Router();
const User = ("../models/User")
const CryptoJS = require("crypto-js")


//register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_W).toString(),
        ​
       
        
    });
    try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    
} catch(err){
    res.status(500).json(err);
}
});

//log

router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json("wrong creditials");
        const hashpass = CryptoJS.AES.decrypt(user.password, process.env.PASS_W);
        const password1 = hashpass.toString(CryptoJS.enc.Utf8);

        password1 !== req.body.password && res.status(401).json("wrong creditials");
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;