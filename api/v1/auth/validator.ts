import { NextFunction, Request, Response } from "express";
const signupValidator = (req: Request, res: Response, next: NextFunction) => {
  console.log("I am inside the signupValidator");
  if (!req.body.email) {
    return res.status(400).json({ message: "Email are required" });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: "Password are required" });
  }

  next();
};

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  console.log("I am inside the loginValidator");
  if (!req.body.email) {
    return res.status(400).json({ message: "Email are required" });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: "Password are required" });
  }

  next();
};

export { signupValidator, loginValidator };
