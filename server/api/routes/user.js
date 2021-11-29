const router = require('express').Router();

router.get("/usertest", (req, res) => {
   res.send("getting user test");
});

router.post("/posttest", (req, res) => {
   const user = req.body.username;
   console.log(user);
});

module.exports = router;