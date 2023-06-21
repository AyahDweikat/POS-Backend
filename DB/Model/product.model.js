import mongoose, { Schema, Types, model } from "mongoose";
const productSchema = new Schema({
    productName:{
        type:String,
        required:true,
    },
    productCode:{
        type:Number,
        required:true,
    },
    productCategory:{
        type:String,
        required:true,
    },
    productImg:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    measureUnit:{
        type:String,
        required:true,
    },
    userId:{
        type:Types.ObjectId,
        required:true,
    },
},
{
    timestamps:true,
})
const productModel = mongoose.models.Product || model('Product', productSchema);
export default productModel;
