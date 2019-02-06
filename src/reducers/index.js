import { combineReducers } from 'redux';
import tasksReducer  from './tasksReducer';
import isDisplayForm from './isDisplayForm';
import itemEditting from './itemEditting';
const myReducer = combineReducers({
    tasksReducer,
    isDisplayForm,
    itemEditting
});

export default myReducer;