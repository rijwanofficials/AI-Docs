import { Router } from "express";
import { userIdValidator } from "./validator";
import { getProfileController } from "./controller";


const userRouter = Router();

userRouter.get("/:id", userIdValidator, getProfileController);

export { userRouter };
