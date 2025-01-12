import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://project-1-bsckend.onrender.com/api",
  baseURL: "http://localhost:8000/api",

  withCredentials: true,
});

export default axiosInstance;
