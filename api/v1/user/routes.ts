import { Router } from "express";
import { authMiddleware } from "./middleware";
import { getProfileController } from "./controller";

const userRouter = Router();

userRouter.get("/profile", authMiddleware, getProfileController);

export default userRouter;
