import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../lib/api";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const { mutate: loginMutation, isPending, error, data } = useMutation({
    mutationKey: ['login'],
    mutationFn: loginUser,
    retry: false, // Disable retry on failure
    onSuccess: (data) => {
      console.log('signin data', data);
      setTimeout(() => {
        queryClient.invalidateQueries(['authUser']);
      }, 3000)
    }, onError(error) {
      console.log('signin error', error);
    }
  });
  return { loginMutation, isPending, error };
}