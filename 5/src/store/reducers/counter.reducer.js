const initalState = {
    value: 0
}

const counterReducer =  (state = initalState, action) => {
    switch(action.type) {
        case 'UPDATE':
            return {
                value: state.value + action.payload.num
            }
        default: return state;
    }
}

export default counterReducer;