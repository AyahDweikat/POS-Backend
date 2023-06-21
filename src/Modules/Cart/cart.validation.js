import joi from "joi";

export const addCartSchema = {
  body: joi
    .object({
        cartDesc: joi.string().required().messages({
        "any.required": "cartDesc is required",
        "string.empty": "cartDesc is required",
      }),
      cartTax: joi.number(),
      cartDiscount: joi.number(),
      products: joi.array(),
    })
    .required(),
};

export const deleteCartSchema = {
  params: joi
    .object({
      cartId: joi.string().required(),
    })
    .required(),
};

export const updateCartSchema = {
    body: joi
    .object({
        cartDesc: joi.string().required().messages({
        "any.required": "cartDesc is required",
        "string.empty": "cartDesc is required",
      }),
      cartTax: joi.number(),
      cartDiscount: joi.number(),
      products: joi.array(),
    })
    .required(),
  params: joi
    .object({
      cartId: joi.string().required(),
    })
    .required(),
};
