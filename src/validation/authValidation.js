import { check } from "express-validator";

let validateRegister = [
  check("email", "Correo invalido").isEmail().trim(),

  check(
    "password",
    "Contraseña invalida. La contraseña debe ser minimo 2 caracteres"
  ).isLength({ min: 2 }),

  check("passwordConfirmation", "Las contraseñas no coinciden.").custom(
    (value, { req }) => {
      return value === req.body.password;
    }
  ),
];

let validateLogin = [
  check("email", "Correo invalido").isEmail().trim(),

  check("password", "Contraseña invalida").not().isEmpty(),
];

module.exports = {
  validateRegister: validateRegister,
  validateLogin: validateLogin,
};
