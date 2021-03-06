

const express = require("express");

const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/login");
const prodRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/transactionStripe");

mongoose.connect('process.env.MONGODB_URI || 'mongodb://localhost/projectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("DB Connected.."));

app.use(express.json());


app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', prodRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Backend server running")
});