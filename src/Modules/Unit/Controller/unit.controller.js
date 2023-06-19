import unitModel from "../../../../DB/Model/unit.model.js";
import userModel from "../../../../DB/model/user.model.js";

export const getUnits = async(req, res)=>{
    const UnitList = await unitModel.find({userId:req.id}).select("_id unitOfMeasure baseUnit conversionFactor")
    res.status(200).json({message:"successs", UnitList})
}

export const addUnit = async(req, res)=>{
    const userId= req.id;
    const user = await userModel.findById(userId);
    if(!user){
        return res.status(401).json({message:"user not found"});
    }
    const {unitOfMeasure, baseUnit, conversionFactor} = req.body;
    const createUnit = await unitModel.create({
        unitOfMeasure, baseUnit, conversionFactor, userId
      });
    res.status(200).json({message:"successs", createUnit})
}

export const deleteUnit = async(req, res)=>{
    const {unitId} = req.params;
    const deletedProcess = await unitModel.findByIdAndDelete({_id:unitId})
    if(!deletedProcess){
        res.status(404).json({message:"unit is not found"})
    }
    res.status(200).json({message:"successs", deletedProcess})
}

export const updateUnit = async(req, res)=>{
    const {unitId} = req.params;
    const {unitOfMeasure, baseUnit, conversionFactor} = req.body;
    const updatedProcess = await unitModel.findByIdAndUpdate({_id:unitId},{unitOfMeasure, baseUnit, conversionFactor}, {new:true} )
    res.status(200).json({message:"successs updated", updatedProcess})
}
