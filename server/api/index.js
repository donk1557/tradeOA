const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/login");
const prodRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/transactionStripe");

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("DB Connected.."));

app.use(express.json());

app.use(cookieSession({
   name: "session",
   key: ["lama"],
   maxAge: 30 * 60 * 100
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
)
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', prodRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(5000, () => {
    console.log("Backend server running")
});