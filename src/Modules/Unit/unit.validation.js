import joi from "joi";

export const addUnitSchema = {
  body: joi
    .object({
      unitOfMeasure: joi.string().required().messages({
        "any.required": "unitOfMeasure is required",
        "string.empty": "unitOfMeasure is required",
      }),
      baseUnit: joi.string().required().messages({
        "any.required": "baseUnit is required",
        "string.empty": "baseUnit is required",
      }),
      conversionFactor:joi.number().required().messages({
        "any.required": "conversionFactor is required",
        "string.empty": "conversionFactor is required",
      }),
    })
    .required(),
};


export const deleteUnitSchema = {
  params: joi
    .object({
        unitId: joi.string().required(),
    })
    .required(),
};

export const updateUnitSchema = {
    body: joi
      .object({
        unitOfMeasure: joi.string().required().messages({
          "any.required": "unitOfMeasure is required",
          "string.empty": "unitOfMeasure is required",
        }),
        baseUnit: joi.string().required().messages({
          "any.required": "baseUnit is required",
          "string.empty": "baseUnit is required",
        }),
        conversionFactor:joi.number().required().messages({
          "any.required": "conversionFactor is required",
          "string.empty": "conversionFactor is required",
        }),
    }).required(),
    
    params: joi
    .object({
        unitId: joi.string().required(),
    })
    .required(),
  };


