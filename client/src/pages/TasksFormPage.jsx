import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const TasksFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTaskById, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams()

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTaskById(params.id)
        setValue("title", task.title)
        setValue("description", task.description)
      }
    }

    loadTask()

  }, [])
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateTask(params.id, {
        ...data,
        date: dayjs.utc(data.date).format(),
      });
    } else {
      createTask({
        ...data,
        date: dayjs.utc(data.date).format(),
      });
    }
    navigate("/tasks");

  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="" className="">Title</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <label htmlFor="">Description</label>
        <textarea
          placeholder="Description"
          id=""
          cols="30"
          rows="10"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>

        <label htmlFor="" className="">Date</label>
        <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="date" {...register("date")} />
        <button className="bg-indigo-500 px-3 py-2 mt-2 rounded-md">Save</button>
      </form>
    </div>
  );
};

export default TasksFormPage;
