import express from "express";
import morgan from "morgan";
import authRoutes from "./routers/auth.routes.js";
import cookieParser from "cookie-parser";
import tasksRoutes from "./routers/tasks.routes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json()); // For express can read json
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);

export default app;
