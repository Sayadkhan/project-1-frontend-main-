import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://project-1-bsckend.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
