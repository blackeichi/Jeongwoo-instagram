import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import mongoose from "mongoose";
import session from "express-session";
import { localsMiddleware } from "./middleware";
import MongoStore from "connect-mongo";
import apiRouter from "./routers/apiRouter";
require("dotenv").config();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
const handleOpen = () => console.log("⭕ Connected to DB");
const handleError = (error) => console.log("❌ Failed DB");
db.on("error", handleError);
db.once("open", handleOpen);

const PORT = process.env.PORT || 4000;
const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "hello",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
app.use("/uploads", express.static("uploads"));
app.use(localsMiddleware);
app.use("/static", express.static("assets"));
app.use("/", globalRouter);
app.use("/api", apiRouter);

const handleListening = () =>
  console.log("서버 Listening 성공! http://localhost:" + PORT);

app.listen(PORT, handleListening);
