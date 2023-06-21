
import userModel from "../../../../DB/Model/user.model.js";
import productModel from './../../../../DB/Model/product.model.js';

export const getProducts = async(req, res)=>{
    const ProductList = await productModel.find({userId:req.id}).select("_id productName productCode productCategory productPrice productImg measureUnit")
    res.status(200).json({message:"successs", ProductList})
}

export const addProduct = async(req, res)=>{
    const userId= req.id;
    const user = await userModel.findById(userId);
    if(!user){
        return res.status(401).json({message:"user not found"});
    }
    const {productName, productCode, productCategory, productPrice, productImg, measureUnit} = req.body;
    const product = await productModel.create({
        productName, productCode, productCategory, productPrice, productImg, measureUnit, userId
      });
    res.status(200).json({message:"successs", product})
}

export const deleteProduct = async(req, res)=>{
    const {productId} = req.params;
    const _product  = await productModel.findById({_id:productId})
    if(!_product){
        res.status(404).json({message:"product is not found"})
    }
    const deletedProcess = await productModel.findByIdAndDelete({_id:productId})
    res.status(200).json({message:"successs", deletedProcess})
}

export const updateProduct = async(req, res)=>{
    const {productId} = req.params;
    const _product  = await productModel.findById({_id:productId})
    if(!_product){
        res.status(404).json({message:"product is not found"})
    }
    const {productName, productCode, productCategory, productPrice, productImg, measureUnit} = req.body;
    const updatedProcess = await productModel.findByIdAndUpdate({_id:productId},{productName, productCode, productCategory, productPrice, productImg, measureUnit}, {new:true} )
    
    res.status(200).json({message:"successs updated", updatedProcess})
}
