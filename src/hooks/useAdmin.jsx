import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Ensure the query only runs if the user is logged in
  const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email], // Dependency on user email
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data.admin;
      }
      return false; // Return false if user is not logged in
    },
    enabled: !!user?.email, // The query only runs if there's a valid user email
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
