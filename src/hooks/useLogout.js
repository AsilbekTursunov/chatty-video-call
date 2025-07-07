import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutUser } from "../lib/api"

export const useLogout = () => {
  const queryClient = useQueryClient()
  const { mutate: logoutMutation } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      queryClient.invalidateQueries(['authUser'])
    },
  })
  return { logoutMutation }
}