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
import { getUser } from "./models/login.js";

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

// app.use('/users', usersRouter);
// app.use('/login', router);

app.post("/auth", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await getUser(username, password);
  if (user) {
    console.log(user);
    req.session.loggedin = true;
    req.session.username = username;
    console.log(session);
    res.redirect('/html/profile.html');
  } else {
    res.send("Incorrect Username and/or Password!");
  }
  res.end();
});

console.log(__dirname);
export default app;
