// src/pages/Feed.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const [watchTime, setWatchTime] = useState(0);

  useEffect(() => {
    // Fetch videos from backend
    axios.get("https://your-backend-url.onrender.com/api/videos/list")
      .then(res => setVideos(res.data))
      .catch(err => console.error("Error loading videos", err));
  }, []);

  const handleWatch = async (videoId) => {
    setWatchTime(10); // Simulate 10 seconds
    try {
      await axios.post("https://your-backend-url.onrender.com/api/rewards/watch", {
        watchedSeconds: 10
      }, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      alert("You earned 5 points!");
    } catch {
      alert("Watch at least 10 seconds to earn!");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">🎬 Watch & Earn</h2>
      {videos.map(video => (
        <div key={video.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">{video.title}</h3>
          <video
            width="100%"
            controls
            onEnded={() => handleWatch(video.id)}
          >
            <source src={video.url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
