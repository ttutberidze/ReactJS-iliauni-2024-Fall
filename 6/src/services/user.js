import {privateApi} from '../api'

export const getUsers = () => {
    return privateApi.get('/users');
}

export const updateUser = ({id}) => {
    return privateApi.patch(`/users/${id}`);
}