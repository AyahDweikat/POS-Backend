
import userModel from "../../../../DB/Model/user.model.js";
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
    const {categoryId} = req.params;
    const _category  = await categoryModel.findById({_id:categoryId})
    if(!_category){
        res.status(404).json({message:"category is not found"})
    }
    const deletedProcess = await categoryModel.findByIdAndDelete({_id:categoryId})
    res.status(200).json({message:"successs", deletedProcess})
}

export const updateCategory = async(req, res)=>{
    const {categoryId} = req.params;
    const _category  = await categoryModel.findById({_id:categoryId})
    if(!_category){
        res.status(404).json({message:"category is not found"})
    }
    const {category} = req.body;
    const updatedProcess = await categoryModel.findByIdAndUpdate({_id:categoryId},{category}, {new:true} )
    res.status(200).json({message:"successs updated", updatedProcess})
}
