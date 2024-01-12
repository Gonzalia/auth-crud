import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
          <Link to={`/tasks/${task._id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md">Edit</Link >
        </div>
      </header>
      <p className="text-slate-300 overflow-y-auto">{task.description}</p>
      <p>{dayjs(task.date).utc().format("MM/DD/YYYY")}</p>
    </div>
  );
};

export default TaskCard;
