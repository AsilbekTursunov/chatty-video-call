import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../lib/api";

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const { mutate: signUpMutation, isPending, error } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: registerUser,
    retry: false, // Disable retry on failure
    onSuccess: () => {
      queryClient.invalidateQueries(["authUser"]);
    },
  });

  return {
    signUpMutation,
    isPending,
    error,
  };
};