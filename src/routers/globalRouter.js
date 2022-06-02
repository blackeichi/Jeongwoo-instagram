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
  getDetail,
  search,
  getLike,
} from "../controllers/globalController";
import {
  avatarUpload,
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
globalRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEditP)
  .post(avatarUpload.single("file"), postEditP);
globalRouter
  .route("/profile/:id([0-9a-f]{24})")
  .all(protectorMiddleware)
  .get(profile);
globalRouter
  .route("/comments/:id([0-9a-f]{24})")
  .all(protectorMiddleware)
  .get(getDetail);
globalRouter.get("/search", search);
globalRouter.get("/like/:id([0-9a-f]{24})", getLike);

export default globalRouter;
