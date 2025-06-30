import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <Toaster position="top-right" />

    
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">PortFolio</h1>
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Register
          </Link>
        </div>
      </nav>

  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
