import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = ({ onLoginSuccess }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", form); // Adjust API URL as needed
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      toast.success("Logged in successfully!");

      if (onLoginSuccess) {
        onLoginSuccess(user);
      }
    } catch (err) {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md p-8 rounded w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Login to PortFolio 
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 mb-4 rounded focus:outline-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 mb-6 rounded focus:outline-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
