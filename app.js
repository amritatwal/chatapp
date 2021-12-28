// var createError = require('http-errors');
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/users', usersRouter);
// app.use('/login', router);

app.post("/auth", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = getUser(username, password);
  if (user) {
    res.json({
      message: "success",
      payload: user,
    });
  }
});

export default app;
