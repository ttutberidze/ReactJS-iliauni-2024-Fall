import {privateApi} from '../api'

export const getUsers = () => {
    return privateApi.get('/users');
}