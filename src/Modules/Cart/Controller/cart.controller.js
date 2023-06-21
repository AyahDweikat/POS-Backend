
import userModel from "../../../../DB/Model/user.model.js";
import cartModel from './../../../../DB/Model/cart.model.js';

export const getCarts = async(req, res)=>{
    const CartList = await cartModel.find({userId:req.id}).select("_id cartDesc cartTax cartDiscount products")
    res.status(200).json({message:"successs", CartList})
}

export const addCart = async(req, res)=>{
    const userId= req.id;
    const user = await userModel.findById(userId);
    if(!user){
        return res.status(401).json({message:"user not found"});
    }
    const {cartDesc, cartTax, cartDiscount, products} = req.body;
    const cart = await cartModel.create({
        cartDesc, cartTax, cartDiscount, products, userId
      });
    res.status(200).json({message:"successs", cart})
}

export const deleteCart = async(req, res)=>{
    const {cartId} = req.params;
    const _cart  = await cartModel.findById({_id:cartId})
    if(!_cart){
        res.status(404).json({message:"cart is not found"})
    }
    const deletedProcess = await cartModel.findByIdAndDelete({_id:cartId})
    res.status(200).json({message:"successs", deletedProcess})
}

export const updateCart = async(req, res)=>{
    const {cartId} = req.params;
    const _cart  = await cartModel.findById({_id:cartId})
    if(!_cart){
        res.status(404).json({message:"cart is not found"})
    }

    const {cartDesc, cartTax, cartDiscount, products} = req.body;
    const updatedProcess = await cartModel.findByIdAndUpdate({_id:cartId},{cartDesc, cartTax, cartDiscount, products}, {new:true} )
    
    res.status(200).json({message:"successs updated", updatedProcess})
}
