const mongoose = require("mongoose");


const schemaProduct = new mongoose.Schema(
    {
        title: {type:String, required:true, unique:true},
        desc: {type:String, required:true, },
        category: {type:Array },
        img: {type:String},
        size: {type:String },
        color: {type:String},
        price: {type:Number, required: true},
        
    },
    {timestamps:true}
    );



    module.exports = mongoose.model("Product", schemaProduct )