import joi from "joi";

export const addCategorySchema = {
  body: joi
    .object({
      category: joi.string().required().messages({
        "any.required": "category is required",
        "string.empty": "category is required",
      }),
    })
    .required(),
};

export const deleteCategorySchema = {
  params: joi
    .object({
      unitId: joi.string().required(),
    })
    .required(),
};

export const updateCategorySchema = {
  body: joi
    .object({
      category: joi.string().required().messages({
        "any.required": "category is required",
        "string.empty": "category is required",
      }),
    })
    .required(),

  params: joi
    .object({
      unitId: joi.string().required(),
    })
    .required(),
};
