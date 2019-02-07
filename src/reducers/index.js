import { combineReducers } from 'redux';
import tasksReducer  from './tasksReducer';
import isDisplayForm from './isDisplayForm';
import itemEditting from './itemEditting';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
const myReducer = combineReducers({
    tasksReducer,
    isDisplayForm,
    itemEditting,
    filterTable,
    search,
    sort
});

export default myReducer;