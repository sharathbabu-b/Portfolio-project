import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", form);
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      toast.success(" Registered successfully!");

      navigate("/dashboard");
    } catch (err) {
      toast.error(" Registration failed. Try a different email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md p-8 rounded w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Create a New Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 mb-4 rounded focus:outline-green-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 mb-4 rounded focus:outline-green-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 mb-6 rounded focus:outline-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <a href="/login" className="text-green-600 hover:underline">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
