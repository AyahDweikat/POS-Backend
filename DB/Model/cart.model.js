import mongoose, { Schema, Types, model } from "mongoose";
const cartSchema = new Schema({
    cartDesc:{
        type:String,
        required:true,
    },
    cartTax:{
        type:Number,
    },
    cartDiscount:{
        type:Number,
    },
    products:{
        type:[{productId:Types.ObjectId,productName:String, quantity:Number}],
    },
    userId:{
        type:Types.ObjectId,
        required:true,
    },
},
{
    timestamps:true,
})
const cartModel = mongoose.models.Cart || model('Cart', cartSchema);
export default cartModel;
