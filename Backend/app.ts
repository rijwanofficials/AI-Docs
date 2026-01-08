import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { apiRouter } from "./api/v1/routes";
import { connectMongoDB } from "./config/mongo";
import { connectPostgres } from "./config/postgre";
import { initEmailService } from "./service/emailHelper";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ---------- Middlewares ---------- */
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log(
//     "➡️",
//     req.method,
//     req.url,
//     "Content-Type:",
//     req.headers["content-type"]
//   );
//   next();
// });

/* ---------- Routes ---------- */
app.use("/api/v1", apiRouter);

/* ---------- DB & Services ---------- */
connectMongoDB();
connectPostgres();
initEmailService();

/* ---------- Test ---------- */
app.get("/testapp", (req, res) => {
  res.json({ message: "Hello from app.ts" });
});

/* ---------- Server ---------- */
app.listen(PORT, () => {
  console.log(`---✅ Server running on port ${PORT}---`);
});
