const Joi = require("joi");

// Hackathon Validation Schema
module.exports.hackathonSchema = Joi.object({
  hackathon: Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Hackathon name is required",
      "string.min": "Hackathon name must be at least 3 characters",
      "string.max": "Hackathon name must be less than 100 characters",
    }),
    date: Joi.date().greater("now").required().messages({
      "date.base": "Date must be a valid format",
      "date.greater": "Date must be in the future",
    }),
    registrationDate: Joi.date()
    .required()
    .less(Joi.ref("date")) // Ensure registrationDate is before date
    .messages({
      "date.less": "Registration date must be before the event date.",
    }),
    duration: Joi.number().integer().positive().min(1).required().messages({
      "number.base": "Duration must be a positive number",
      "number.min": "Duration must be at least 1 hour",
    }),
    description: Joi.string().min(10).max(1000).required().messages({
      "string.empty": "Description is required",
      "string.min": "Description must be at least 10 characters",
      "string.max": "Description must be less than 1000 characters",
    }),
    theme: Joi.string().min(2).max(100).required().messages({
      "string.empty": "Theme is required",
      "string.min": "Theme must be at least 2 characters",
      "string.max": "Theme must be less than 100 characters",
    }),
    maxParticipants: Joi.number().integer().positive().min(1).required().messages({
      "number.base": "Maximum participants must be a number",
      "number.min": "Maximum participants must be at least 1",
    }),
    prize: Joi.number().integer().positive().min(1).allow("", null).messages({
      "number.base": "Maximum participants must be a number",
      "number.min": "Maximum participants must be at least 1",
    }),
    image: Joi.string().allow("", null),
  })
});




module.exports.participateSchema = Joi.object({
  participate: Joi.object({
      pname: Joi.string().min(2).max(100).required().messages({
          "string.empty": "Name is required",
          "string.min": "Name must be at least 2 characters",
          "string.max": "Name must be less than 100 characters",
      }),
      pemail: Joi.string()
          .email({ tlds: { allow: true } }) // Ensures valid email format
          .required()
          .messages({
              "string.empty": "Email is required",
              "string.email": "Please provide a valid email address",
          }),
      contact: Joi.string()
          .pattern(/^[0-9]{10}$/) // Ensures a 10-digit number
          .required()
          .messages({
              "string.empty": "Contact number is required",
              "string.pattern.base": "Contact number must be a valid 10-digit number",
          }),
      gender: Joi.string()
          .valid("Male", "Female", "Other")
          .required()
          .messages({
              "string.empty": "Gender is required",
              "any.only": "Gender must be 'Male', 'Female', or 'Other'",
          }),
      branch: Joi.string().min(2).max(100).required().messages({
          "string.empty": "Branch is required",
          "string.min": "Branch must be at least 2 characters",
          "string.max": "Branch must be less than 100 characters",
      }),
      yearGraduate: Joi.number()
          .integer()
          .min(1900)
          .required()
          .messages({
              "number.base": "Year of graduation must be a number",
              "number.min": "Year of graduation must not be before 1900",
              "number.max": `Year of graduation cannot be after ${new Date().getFullYear()}`,
          }),
      linkedin: Joi.string()
          .uri()
          .allow("", null)
          .optional() // LinkedIn profile is optional
          .messages({
              "string.uri": "LinkedIn profile must be a valid URL",
          }),

  })

});
