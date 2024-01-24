require("dotenv").config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectFlash from "connect-flash";
import passport from "passport";

const path = require("path");

let app = express();

//use cookie parser
app.use(cookieParser("secret"));

//config session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 86400000 1 day
    },
  })
);

// Enable body parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Config view engine
configViewEngine(app);

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes

initWebRoutes(app);

//websites directory
app.use("/websites", express.static(path.join(__dirname, "websites")));
//public directory
app.use("/public", express.static(path.join(__dirname, "public")));

let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Project is working on: ${port}!`));

//LOCAL LAN
/*app.listen(port, "192.168.100.48", () =>
  console.log(`Project is working on: ${port}!`)
);*/
