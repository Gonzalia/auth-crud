import express from "express";
import morgan from "morgan";
import router from "./routers/auth.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json()); // For express can read json
app.use("/api", router);

export default app;
