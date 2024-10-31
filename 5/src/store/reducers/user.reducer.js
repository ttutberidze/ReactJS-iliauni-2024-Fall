import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../constants"

const initialState = {
    list: [],
    state: 'INITIAL', // INITIAL, LOADING, ERROR, SUCCESS
    error: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                list: [],
                state: 'LOADING',
                error: null
            }
        case FETCH_USERS_SUCCESS:
            return {
                list: action.payload.data,
                state: 'SUCCESS',
                error: null
            }
        case FETCH_USERS_ERROR:
            return {
                list: [],
                state: 'ERROR',
                error: action.payload.error
            }
        default: 
            return state;
    }
}

export default userReducer