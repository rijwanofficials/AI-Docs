import { Router } from "express";
import { loginController, signupController } from "./controller";
import { loginValidator, signupValidator } from "./validator";

const authRouter = Router();

authRouter.post("/signup", signupValidator, signupController);
authRouter.post("/login", loginValidator, loginController);
export { authRouter };
