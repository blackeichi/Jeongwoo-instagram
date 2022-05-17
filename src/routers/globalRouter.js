import express from "express";
import {
  handleLogin,
  postLogin,
  getJoin,
  postJoin,
  getHome,
  logOut,
  getUpload,
  postUpload,
  getEditP,
  postEditP,
  profile,
} from "../controllers/globalController";
import {
  imgUpload,
  protectorMiddleware,
  publicOnlyMiddleware,
} from "../middleware";

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
globalRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(imgUpload.single("file"), postUpload);
globalRouter.route("/profile/:id").all(protectorMiddleware).get(profile);
export default globalRouter;
