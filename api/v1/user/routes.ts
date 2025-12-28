import { Router } from "express";

const userRouter = Router();

userRouter.get("/signup", userRouter);
userRouter.get("/login", userRouter);
export { userRouter };