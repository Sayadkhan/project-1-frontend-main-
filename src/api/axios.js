import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your backend URL
  withCredentials: true, // Allow cookies if needed (JWT in cookies)
});

export default axiosInstance;
