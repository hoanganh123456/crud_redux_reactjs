import { combineReducers } from 'redux';
import tasksReducer  from './tasksReducer';
const myReducer = combineReducers({
    tasksReducer
});

export default myReducer;