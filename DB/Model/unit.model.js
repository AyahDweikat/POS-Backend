import mongoose, { Schema, Types, model } from "mongoose";
const unitSchema = new Schema({
    unitOfMeasure:{
        type:String,
        required:true,
    },
    baseUnit:{
        type:String,
        required:true,
    },
    conversionFactor:{
        type:Number,
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
const unitModel = mongoose.models.Unit || model('Unit', unitSchema);
export default unitModel;
