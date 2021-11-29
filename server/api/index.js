const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/login");

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("DB Connected.."));

app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(5000, () => {
    console.log("Backend server running")
});