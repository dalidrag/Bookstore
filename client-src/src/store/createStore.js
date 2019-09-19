import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';

import rootReducer from './rootReducer';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(createLogger()),
    );
}
