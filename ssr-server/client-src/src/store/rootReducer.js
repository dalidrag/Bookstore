import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homeReducer from '../view-home/store/homeReducer';
import categoryReducer from '../view-category/store/categoryReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    homeReducer,
    categoryReducer
  });

export default rootReducer;
