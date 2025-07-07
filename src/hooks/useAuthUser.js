import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUser, registerUser } from "../lib/api";

export const useAuthUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: getCurrentUser,
    retry: false, // Disable retry on failure
  });

  return {
    authUser: data?.user,
    isLoading,
  };
};