import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Only run the query if user and user.email are defined
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !!user?.email, // Prevent query from running if user.email is not available
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
