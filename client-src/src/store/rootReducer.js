import {combineReducers} from 'redux';

import homeReducer from '../view-home/store/homeReducer';
import categoryReducer from '../view-category/store/categoryReducer';

const rootReducer = combineReducers({
    homeReducer,
    categoryReducer,
});

export default rootReducer;

