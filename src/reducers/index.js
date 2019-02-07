import { combineReducers } from 'redux';
import tasksReducer  from './tasksReducer';
import isDisplayForm from './isDisplayForm';
import itemEditting from './itemEditting';
import filterTable from './filterTable';
const myReducer = combineReducers({
    tasksReducer,
    isDisplayForm,
    itemEditting,
    filterTable
});

export default myReducer;