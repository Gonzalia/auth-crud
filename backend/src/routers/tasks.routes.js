import { Router } from "express";
import { authRequired } from "../middlewares/ValidateToken.js";
import {
  createTask,
  deleteTask,
  getTaskByID,
  getTasks,
  updateTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTaskByID);
router.post("/tasks", authRequired, createTask);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updateTask);

export default router;
