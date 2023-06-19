import userModel from "../../../../DB/model/user.model.js";
import cloudinary from "../../../services/cloudinary.js";

export const getProfile=async (req, res)=>{
    const {id} = req;
    const user = await userModel.findById(id).select("userName email profilePic");
    return res.json({message:"user profile", user})
}


export const addProfileImg = async(req, res)=>{
    if(!req.file){
        return res.status(400).json({message:'file is required!'}) 
    }
    const user = await userModel.findById(req.id).select("_id");
    const {secure_url} =await cloudinary.uploader.upload(req.file.path, {folder:`posApp/${user.id}/userProfilePic`});
    const updatedUser = await userModel.updateOne({_id:req.id},{profilePic:secure_url})
    return res.status(200).json({message:"profile updated sucessfully",updatedUser})
}
