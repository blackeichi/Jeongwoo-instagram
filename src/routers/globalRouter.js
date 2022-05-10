import express from "express";
import {
  handleLogin,
  postLogin,
  getJoin,
  postJoin,
  getHome,
  logOut,
} from "../controllers/loginController";
import { protectorMiddleware, publicOnlyMiddleware } from "../middleware";

const globalRouter = express.Router();

globalRouter
  .route("/")
  .all(publicOnlyMiddleware)
  .get(handleLogin)
  .post(postLogin);
globalRouter
  .route("/Join")
  .all(publicOnlyMiddleware)
  .get(getJoin)
  .post(postJoin);
globalRouter.route("/home").all(protectorMiddleware).get(getHome);
globalRouter.route("/logout").all(protectorMiddleware).get(logOut);
export default globalRouter;
