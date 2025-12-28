import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { apiRouter } from "./api/v1/routes";
import { connectMongoDB } from "./config/mongo";
import { connectPostgres } from "./config/postgre";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

/* ---------- Middlewares ---------- */
app.use(cors());
app.use(express.json());

/* ---------- Routes ---------- */
app.use("api/v1", apiRouter);

//---------- Database Connections ---------- */
connectMongoDB();
connectPostgres();

// Sample API for testing purpose
app.get("/testapp", (req: Request, res: Response) => {
  res.json({ message: "Hello from app.ts" });
});

/* ---------- Server ---------- */
app.listen(PORT, () => {
  console.log(`---✅ Server running on port ${PORT}---`);
});


import prisma from "./prismaClient";

(async () => {
  const users = await prisma.user.findMany();
  console.log("Users:", users);
})();
