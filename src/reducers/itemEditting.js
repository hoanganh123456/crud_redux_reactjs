import * as types from '../contants/ActionTypes';
let initialState = {
    id: '',
    name : '',
    status : false
}; // Đóng form
let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            console.log('haaa',action.task);
            return action.task;
        default: return state;
    }
}

export default myReducer;