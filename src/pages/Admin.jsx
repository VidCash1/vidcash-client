// src/pages/Admin.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Only admins can see this
    axios.get("https://your-backend-url.onrender.com/api/admin/users", {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => setUsers(res.data))
      .catch(() => alert("Admin access required"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛠 Admin Dashboard</h1>
      <h2 className="text-xl font-semibold mb-4">👥 Registered Users</h2>
      <ul className="space-y-2">
        {users.map(u => (
          <li key={u._id} className="bg-gray-100 p-3 rounded">
            {u.name} - {u.email} - {u.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
}
