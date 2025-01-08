import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "https://project-1-bsckend.onrender.com/api",
  withCredentials: true, // Allow cookies if needed (JWT in cookies)
});

export default axiosInstance;
