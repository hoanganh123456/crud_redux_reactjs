import * as types from '../contants/ActionTypes';
let initialState = {
    by : 'name',
    value : 1
}; // Đóng form
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by: action.sort.by,
                value: action.sort.value
            };
        default: return state;
    }
}

export default myReducer;