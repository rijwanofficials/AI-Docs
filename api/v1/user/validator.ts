import { Request, Response, NextFunction } from "express";

export const userIdValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) {
    return res.status(400).json({
      message: "User ID is required",
    });
  }

  next();
};
