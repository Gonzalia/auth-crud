import { Router } from "express";
import { authRequired } from "../middlewares/ValidateToken.js";

const router = Router();

router.get("/tasks", authRequired, (req, res) => {
  res.send("Tasks");
});
export default router;
