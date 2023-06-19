
import userModel from "../../../../DB/model/user.model.js";
import categoryModel from './../../../../DB/Model/category.model.js';

export const getCategories = async(req, res)=>{
    const CategoryList = await categoryModel.find({userId:req.id}).select('_id category')
    res.status(200).json({message:"successs", CategoryList})
}

export const addCategory = async(req, res)=>{
    const userId= req.id;
    const user = await userModel.findById(userId);
    if(!user){
        return res.status(401).json({message:"user not found"});
    }
    const {category} = req.body;
    const createCategory = await categoryModel.create({
        category, userId
      });
    res.status(200).json({message:"successs", createCategory})
}

export const deleteCategory = async(req, res)=>{
    const {unitId} = req.params;
    const deletedProcess = await categoryModel.findByIdAndDelete({_id:unitId})
    if(!deletedProcess){
        res.status(404).json({message:"unit is not found"})
    }
    res.status(200).json({message:"successs", deletedProcess})
}

export const updateCategory = async(req, res)=>{
    const {unitId} = req.params;
    const {category} = req.body;
    const updatedProcess = await categoryModel.findByIdAndUpdate({_id:unitId},{category}, {new:true} )
    res.status(200).json({message:"successs updated", updatedProcess})
}
