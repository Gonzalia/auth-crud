import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))
      ) : (
        <h1>No tasks yet</h1>
      )}
    </div>
  );

};

export default TasksPage;
