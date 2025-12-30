import { Response } from "express";
import { AuthRequest } from "./middleware";
import User from "../../../models/userSchema";

export const getProfileController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const user = await User.findById(userId).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Profile fetched successfully",
      user,
    });
  } catch (error) {
    console.error("❌ Profile error:", error);
    return res.status(500).json({
      message: "Failed to fetch profile",
    });
  }
};
