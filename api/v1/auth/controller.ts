import { Request, Response } from "express";
const signupController = async (req: Request, res: Response) => {
  try {
    console.log("Inside the signup controller");
    const { email, password } = req.body;
    // Here, you would typically add logic to save the user to your database.
    res.status(201).json({ message: "User signed up successfully", email });
  } catch (err) {
    console.error("Error in signupController:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginController = async (req: Request, res: Response) => {
  console.log("Inside the login controller");
  res.json({ message: "Login successful" });
};
export { signupController, loginController };
