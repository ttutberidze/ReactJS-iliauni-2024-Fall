export const updateCounterAction = (num) => {
    return {
        type: 'UPDATE',
        payload: {
            num
        }
    }
}