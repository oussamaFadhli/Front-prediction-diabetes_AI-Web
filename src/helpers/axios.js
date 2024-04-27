import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("access") || "";
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
  },
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem("access");
    } else if (error.response && error.response.status === 500) {
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
