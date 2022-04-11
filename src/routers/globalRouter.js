import express from "express";
import { handleLogin } from "../controllers/loginController";

const globalRouter = express.Router();

globalRouter.route("/").get(handleLogin);

export default globalRouter;
