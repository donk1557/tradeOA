const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("DB Connected.."));

app.use(express.json());
app.use('/api/user', userRoute);

app.listen(5000, () => {
    console.log("Backend server running")
});