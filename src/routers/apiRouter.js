import express from "express";
import {
  like,
  deletePost,
  commentPost,
  tagPost,
  postDetail,
} from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.post("/:id([0-9a-f]{24})/like", like);
apiRouter.post("/:id([0-9a-f]{24})/delete", deletePost);
apiRouter.post("/:id([0-9a-f]{24})/comment", commentPost);
apiRouter.post("/:id([0-9a-f]{24})/tag", tagPost);
apiRouter.post("/comments/:id([0-9a-f]{24})", postDetail);

export default apiRouter;
