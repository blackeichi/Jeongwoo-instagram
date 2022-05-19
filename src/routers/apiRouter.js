import express from "express";
import { like } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.post("/:id([0-9a-f]{24})/like", like);

export default apiRouter;
