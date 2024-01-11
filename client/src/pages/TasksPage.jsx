import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
};

export default TasksPage;
