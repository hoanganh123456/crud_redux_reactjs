import * as types from '../contants/ActionTypes';
let initialState = false; // Đóng form
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true;
        default: return state;
    }
}

export default myReducer;