import axios from "axios";



const baseURL = "http://localhost:3020/api/v1"
const axiosInstance = axios.create({
  baseURL: baseURL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6IjY2NmMxYTM4OTVhNmIxNzZiN2YyYmNmNyJ9LCJpYXQiOjE3NDA0MTAwODd9.vktorh8bI0_-JhlljynvILp7CPJar5Rtbjilcc-EhEc" ;
   
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;