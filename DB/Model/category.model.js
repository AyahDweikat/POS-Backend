import mongoose, { Schema, Types, model } from "mongoose";
const categorySchema = new Schema({
    category:{
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
const categoryModel = mongoose.models.Category || model('Category', categorySchema);
export default categoryModel;
