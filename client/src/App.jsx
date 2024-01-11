import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import TasksPage from "./pages/TasksPage";
import TasksFormPage from "./pages/TasksFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./pages/ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />}></Route>
                <Route path="/add-tasks" element={<TasksFormPage />}></Route>
                <Route path="/tasks/:id" element={<TasksFormPage />}></Route>
                <Route path="/profile " element={<ProfilePage />}></Route>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
