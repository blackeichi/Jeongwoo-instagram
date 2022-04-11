import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);

const handleListening = () =>
  console.log("서버 Listening 성공! http://localhost:" + PORT);

app.listen(PORT, handleListening);
