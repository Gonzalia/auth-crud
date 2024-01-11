import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TasksFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { tasks, createTask } = useTasks();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    navigate("/tasks");
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <textarea
          placeholder="Description"
          id=""
          cols="30"
          rows="10"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>

        <button>Save</button>
      </form>
    </div>
  );
};

export default TasksFormPage;
