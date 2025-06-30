import React, { useState } from "react";
import Portfolio from "../components/portfolio";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const userId = "665f1c2e3e789a9ab3dd1205"; // Example
  const userName = "Shatahj"; // You can fetch this from API/JWT later
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = () => {
    // Clear token, redirect, etc.
    console.log("Logout clicked");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* ✅ NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => setShowSidebar(!showSidebar)} className="md:hidden text-2xl">
            {showSidebar ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-xl font-bold text-blue-600"> Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-gray-700 font-medium">
            👋 Hello, {userName}
          </span>
          <FaUserCircle className="text-2xl text-gray-700" />
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* ✅ SIDEBAR */}
        <aside
          className={`bg-white shadow-md w-64 p-4 md:block ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 p-2 rounded">📊 Portfolio</li>
            <li className="hover:bg-gray-100 p-2 rounded">🧾 Transactions</li>
            <li className="hover:bg-gray-100 p-2 rounded">📈 Market</li>
          </ul>
        </aside>

        {/* ✅ MAIN CONTENT */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Portfolio</h2>
          <Portfolio userId={userId} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
