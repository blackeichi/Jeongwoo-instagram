import express from "express";
import { like, deletePost } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.post("/:id([0-9a-f]{24})/like", like);
apiRouter.post("/:id([0-9a-f]{24})/delete", deletePost);

export default apiRouter;
