import joi from "joi";

export const addProductSchema = {
  body: joi
    .object({
      productName: joi.string().required().messages({
        "any.required": "productName is required",
        "string.empty": "productName is required",
      }),
      productCode: joi.string().required().messages({
        "any.required": "productCode is required",
        "string.empty": "productCode is required",
      }),
      productCategory: joi.string().required().messages({
        "any.required": "productCategory is required",
        "string.empty": "productCategory is required",
      }),
      productImg: joi.string().required().messages({
        "any.required": "productImg is required",
        "string.empty": "productImg is required",
      }),
      productPrice: joi.number().min(1).required().messages({
        "any.required": "productPrice is required",
        "string.empty": "productPrice is required",
      }),
      measureUnit: joi.string().required().messages({
        "any.required": "measureUnit is required",
        "string.empty": "measureUnit is required",
      }),
    })
    .required(),
};

export const deleteProductSchema = {
  params: joi
    .object({
      productId: joi.string().required(),
    })
    .required(),
};

export const updateProductSchema = {
  body: joi
    .object({
      productName: joi.string().required().messages({
        "any.required": "productName is required",
        "string.empty": "productName is required",
      }),
      productCode: joi.string().required().messages({
        "any.required": "productCode is required",
        "string.empty": "productCode is required",
      }),
      productCategory: joi.string().required().messages({
        "any.required": "productCategory is required",
        "string.empty": "productCategory is required",
      }),
      productImg: joi.string().required().messages({
        "any.required": "productImg is required",
        "string.empty": "productImg is required",
      }),
      productPrice: joi.number().min(1).required().messages({
        "any.required": "productPrice is required",
        "string.empty": "productPrice is required",
      }),
      measureUnit: joi.string().required().messages({
        "any.required": "measureUnit is required",
        "string.empty": "measureUnit is required",
      }),
    })
    .required(),
  params: joi
    .object({
      productId: joi.string().required(),
    })
    .required(),
};
