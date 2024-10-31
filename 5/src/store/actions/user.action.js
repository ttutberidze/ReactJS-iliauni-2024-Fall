import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../constants"
import {getUsers} from '../../services/user' 

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: {data}
    }
}

const fetchUserError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: {error}
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchUserRequest())
            const data = await getUsers();
            dispatch(fetchUserSuccess(data))
        }catch(error) {
            dispatch(fetchUserError(error))
        }
    }
}