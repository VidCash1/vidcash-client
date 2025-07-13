// src/pages/Wallet.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Wallet() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    axios.get("https://your-backend-url.onrender.com/api/auth/me", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setPoints(res.data.points))
      .catch(() => alert("Login required"));
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-orange-600">💰 Wallet</h1>
      <p className="mt-6 text-xl">You’ve earned:</p>
      <div className="text-5xl font-bold mt-4">{points} Points</div>
      <p className="mt-2 text-gray-500">Points can be withdrawn via PayPal, JazzCash, or EasyPaisa</p>
    </div>
  );
}
