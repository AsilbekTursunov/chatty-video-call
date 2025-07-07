import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../lib/api";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const { mutate: loginMutation, isPending, error } = useMutation({
    mutationKey: ['login'],
    mutationFn: loginUser,
    retry: false, // Disable retry on failure
    onSuccess: () => {
      queryClient.invalidateQueries(['authUser']);
    }
  });
  return { loginMutation, isPending, error };
}