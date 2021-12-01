const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) =>{
    const authHead = req.headers.token;
    if(authHead){
        const token = authHead.split(" ")[1];
        jwt.verify(token, process.env.JWT_S,(err,user)=>{
            if(err) res.status(403).json("token not vaild");
            req.user = user;
            next();
    });
}else {
        return res.status(401).json("not authenticated")
    }
};

const verifyTokenandAuth = (req,res,next)=>{
    verifyToken(req,res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("not allowed")
        }
    });
};

const verifyTokenandAdmin = (req,res,next)=>{
    verifyToken(req,res, () => {
        if (req.user.isAdmin){
            next();
        }else{
            res.status(403).json("not allowed")
        }
    });
};


module.exports = {verifyToken, verifyTokenandAuth, verifyTokenandAdmin};