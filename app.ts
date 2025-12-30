import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { apiRouter } from "./api/v1/routes";
import { connectMongoDB } from "./config/mongo";
import { connectPostgres } from "./config/postgre";
import { initEmailService } from "./service/emailHelper";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


/* ---------- Routes ---------- */
app.use("/api/v1", apiRouter);


/* ---------- Middlewares ---------- */
app.use(cors());
app.use(
  express.json({
    strict: false,
  })
);



//---------- Database Connections ---------- */
connectMongoDB();
connectPostgres();

// Initialize email service ONCE
initEmailService();

// Sample API for testing purpose
app.get("/testapp", (req: Request, res: Response) => {
  res.json({ message: "Hello from app.ts" });
});

/* ---------- Server ---------- */
app.listen(PORT, () => {
  console.log(`---✅ Server running on port ${PORT}---`);
});
