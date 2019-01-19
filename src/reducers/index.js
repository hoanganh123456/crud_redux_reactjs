import { combineReducers } from 'redux';
import tasksReducer  from './tasksReducer';
import isDisplayForm from './isDisplayForm';
const myReducer = combineReducers({
    tasksReducer,
    isDisplayForm
});

export default myReducer;