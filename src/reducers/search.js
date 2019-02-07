import * as types from '../contants/ActionTypes';
let initialState = ''; // Đóng form
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword;
        default: return state;
    }
}

export default myReducer;