import { useAuth } from "../context/AuthContext";

const TasksPage = () => {
  const { user } = useAuth();
  console.log(user);
  return <div></div>;
};

export default TasksPage;
