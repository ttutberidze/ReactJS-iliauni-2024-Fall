import {getUsers} from '../services/user';
import { useQuery } from '@tanstack/react-query';

export const useUserListQuery = ({page}) => useQuery({
    queryKey: ['fetchUsers', page],
    queryFn: getUsers,
})