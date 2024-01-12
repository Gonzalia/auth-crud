import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest
} from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await getTasksRequest();
    setTasks(response.data);
  };

  const getTaskById = async (id) => {
    try {
      const response = await getTaskRequest(id)
      return response.data
    } catch (error) {
      console.error(error);
    }

  }

  const createTask = async (task) => {
    console.log(task);
    const response = await createTaskRequest(task);
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      if (response.status === 204)
        setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      const response = await updateTaskRequest(id, task)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks, getTaskById, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContext;
