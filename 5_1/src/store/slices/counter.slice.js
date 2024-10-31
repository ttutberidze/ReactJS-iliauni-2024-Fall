import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter-slice',
    initialState,
    reducers: {
        update: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const {update} = counterSlice.actions
export default counterSlice.reducer