import axios from "axios";

const axiosInstance = axios.create({
  // FIX: Added :5000/api to the URL below
  baseURL: import.meta.env.VITE_API_URL || "http://3.250.11.183",
});

// Attach JWT token from localStorage to every request if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // This will now log correctly: http://3.250.11.183/videos
  console.log("Request URL:", config.baseURL + config.url);
  return config;
});

export default axiosInstance;
