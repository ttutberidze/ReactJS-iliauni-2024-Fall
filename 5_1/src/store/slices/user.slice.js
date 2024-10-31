import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../../services/user';

const initialState = {
    list: [],
    state: 'INITIAL', // INITIAL, LOADING, ERROR, SUCCESS
    error: null
}

export const fetchUsers = createAsyncThunk('/users/fetch', getUsers)

const userSlice = createSlice({
    name: 'user-slice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.state = 'SUCCESS';
                state.list.push(...action.payload);
                state.error = null
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.state = 'ERROR';
                state.list = [];
                state.error = action.payload
            })
            .addCase(fetchUsers.pending, (state) => {
                state.state = 'LOADING';
                state.list = []
                state.error = null
            })
    }
})

export default userSlice.reducer