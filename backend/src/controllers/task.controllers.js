import Task from "../models/task.model.js";
export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate("user", "username email");
  res.json(tasks);
};
export const getTaskByID = async (req, res) => {
  const taskByID = await Task.findById(req.params.id);
  if (!taskByID) return res.status(404).json({ message: "Task not found" });

  res.json(taskByID);
};
export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  }).populate("user", "username email");
  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const deleteTask = async (req, res) => {
  const taskByID = await Task.findByIdAndDelete(req.params.id);
  if (!taskByID) return res.status(404).json({ message: "Task not found" });
  return res.sendStatus(204).json({ message: "ok" });
};

export const updateTask = async (req, res) => {
  const taskByID = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // This returns the UPDATED task, by default, mongo returns the previous task
  });
  if (!taskByID) return res.status(404).json({ message: "Task not found" });
  res.json(taskByID);
};
