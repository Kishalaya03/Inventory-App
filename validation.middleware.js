//export default works with three things
//HoistedDeclaration means a function
//class
//Assignment Expression
// we will not use the below code for using clean and better coding so we will use the express-validator library for it
// const validateRequest = (req, res, next) => {
//validate data
//   const { name, price, imageUrl } = req.body;
//the error variable here is an array remember it
//   let errors = [];
//   if (!name || name.trim() == "") {
//     errors.push("Name is required");
//   }
//   if (!price || parseFloat(price) < 1) {
//     errors.push("Price must be a positive value");
//   }
//   try {
//     const validUrl = new URl(imageUrl);
//   } catch (err) {
//     errors.push("URL is invalid");
//   }

import { body, validationResult } from "express-validator";
const validateRequest = async (req, res, next) => {
  //start of express-validator
  console.log(req.body);
  //1. setup rules for validation i.e it will be an array of rules
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 0 }) //gt means greater than
      .withMessage("Price should be positive value"),
    //body("imageUrl").isURL().withMessage("Entered invalid URl"),
    body("imageUrl").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Image is required");
      }
      return true;
    }),
  ];
  //2.run those rules
  await Promise.all(rules.map((rule) => rule.run(req)));
  //3.check if there are any errors afterrunning the rules
  var validationErrors = validationResult(req);
  console.log(validationErrors);
  //if there are more than 1 error then return it back to the new product webpages and give the error message for the forst error which you made,so errors[0]
  if (!validationErrors.isEmpty()) {
    return res.render("new-product", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
};
export default validateRequest;
