import registerService from "./../services/registerService";
import { validationResult } from "express-validator";

let getPageRegister = (req, res) => {
  return res.render("register", {
    errors: req.flash("errors"),
  });
};
/*
let createNewUser = async (req, res) => {
  //validate required fields
  let errorsArr = [];
  let validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach((item) => {
      errorsArr.push(item.msg);
    });
    req.flash("errors", errorsArr);
    return res.redirect("/register");
  }
  //create a new user
  let newUser = {
    rfcReg: req.body.rfcReg,
    companyName: req.body.companyName,
    name: req.body.name,
    last_name_pat: req.body.last_name_pat,
    last_name_m: req.body.last_name_m,
    phone: req.body.phone,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    await registerService.createNewUser(newUser);
    return res.redirect("/login");
  } catch (err) {
    req.flash("errors", err);
    return res.redirect("/register");
  }
};*/

let createNewUser = async (req, res) => {
  // Validate required fields
  let errorsArr = [];
  let validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach((item) => {
      errorsArr.push(item.msg);
    });
    req.flash("errors", errorsArr);
    return res.redirect("/register");
  }

  // Create a new user
  let newUser = {
    rfcReg: req.body.rfcReg,
    companyName: req.body.companyName,
    name: req.body.name,
    last_name_pat: req.body.last_name_pat,
    last_name_m: req.body.last_name_m,
    phone: req.body.phone,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    await registerService.createNewUser(newUser);
    return res.redirect("/login");
  } catch (err) {
    req.flash("errors", err.message);
    return res.redirect("/register");
  }
};

module.exports = {
  getPageRegister: getPageRegister,
  createNewUser: createNewUser,
};
