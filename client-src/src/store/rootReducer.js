import {combineReducers} from 'redux';

import homeReducer from '../view-home/store/homeReducer';

const rootReducer = combineReducers({
    homeReducer,
});

export default rootReducer;

