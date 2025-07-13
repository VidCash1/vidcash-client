// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold text-orange-600">Watch. Earn. Withdraw.</h1>
      <p className="mt-4 text-lg">Start earning by watching videos</p>
      <Link to="/feed" className="bg-orange-500 text-white px-6 py-3 rounded-xl mt-6 inline-block">
        Get Started
      </Link>
    </div>
  );
}
