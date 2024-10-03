import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://newspaper-server-vert.vercel.app",
  baseURL: "https://jeebisa.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
