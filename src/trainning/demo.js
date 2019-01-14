import { createStore } from 'redux';
import { status, sort } from './action/index';

import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('Default',store.getState());

store.dispatch(status());

console.log('TOGGLE_STATUS',store.getState());


store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('STORE',store.getState());