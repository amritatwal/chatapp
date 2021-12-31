// var createError = require('http-errors');
import express, { response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";
import logger from "morgan";
// import usersRouter from '/routes/users.js';
// import router from './routes/login.js';
import { fileURLToPath } from "url";
import { dirname } from "path";
import { userAuthentication, getUserInfo} from "./models/login.js";
import { Console } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.get('/profile', function (req, res) {
  res.sendFile(__dirname + "/public/html/profile.html");
})

app.get('/profile', function (req, res) {
  console.log('success!');
})

app.post("/profile", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await userAuthentication(username, password);
  if (user) {
    req.session.loggedin = true;
    req.session.username = user.username;
    req.session.userId = user.user_id;
    res.redirect("/profile");
  } else {
    res.send("Incorrect Username and/or Password!");
  }
  res.end();
});


export default app;
