import express from "express";
import mainPageController from "../controllers/mainPageController";
import homePageController from "../controllers/homePageController";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";
import auth from "../validation/authValidation";
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController";
import userProfileController from "../controllers/userProfileController";
import companyController from "../controllers/companyController";
import explanationPageController from "../controllers/explanationPageController";
import contactController from "../controllers/contactController";
import analiticsController from "../controllers/analiticsController";
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
  /*router.get(
    "/",
    loginController.checkLoggedIn,
    homePageController.handleHelloWorld
  );*/
  //Logged IN
  router.get(
    "/home",
    loginController.checkLoggedIn,
    homePageController.handleHelloWorld
  );
  //Main Page Controller
  router.get("/", mainPageController.showMainPage);
  router.get("/getImages", mainPageController.getImageUrls);

  //Explanation Page Controller
  router.get("/explanation", explanationPageController.showExplanation);

  router.get(
    "/login",
    loginController.checkLoggedOut,
    loginController.getPageLogin
  );
  router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/login",
      successFlash: true,
      failureFlash: true,
    })
  );

  router.get("/register", registerController.getPageRegister);
  router.post(
    "/register",
    auth.validateRegister,
    registerController.createNewUser
  );
  router.post("/logout", loginController.postLogOut);

  //User Routes
  router.get("/user", userProfileController.getUserSettings);
  router.post("/update", userProfileController.updateSettings);

  //Copmany Routes
  router.get("/company", companyController.viewCompanyPage);
  //router.post("/generate", companyController.handleFileUpload);
  router.post(
    "/generate",
    upload.single("image"),
    companyController.handleFileUpload
  );

  //Contact Route
  router.get("/contacto", contactController.showContactPage);
  router.post("/submitContact", contactController.sendEmail);
  router.post("/firstMessage", contactController.firstMessage);
  router.post("/otherMessages", contactController.otherMessages);
  router.post("/getMessages", contactController.getMessages);

  //Analitics router
  router.get("/analitics", analiticsController.getAnalytics);

  return app.use("/", router);
};
module.exports = initWebRoutes;
