import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: "https://newspaper-server-vert.vercel.app",
  // baseURL: "https://jeebisa.vercel.app/",
  baseURL: "http://localhost:5000/",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();

  // interceptor for request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request interceppted", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // interceptor for response
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("status error", status);
      if (status === 401 || status === 403) {
        await logOut();
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};
export default useAxiosSecure;
