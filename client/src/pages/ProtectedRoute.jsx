import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isAuthenticated } = useAuth();
  console.log(user);
  console.log(isAuthenticated);
  if (!isAuthenticated) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};
export default ProtectedRoute;
