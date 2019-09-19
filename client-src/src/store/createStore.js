import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import {createLogger} from 'redux-logger';

import rootReducer from './rootReducer';


export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware, createLogger()),
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}
