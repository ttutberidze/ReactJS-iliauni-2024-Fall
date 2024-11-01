import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/user";

export const useUpdateUserMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateUser,
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: ['fetchUsers'],
                exact: false,
                type: 'all'
            })
        }
    })
}