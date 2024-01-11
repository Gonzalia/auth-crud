import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
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

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContext;
