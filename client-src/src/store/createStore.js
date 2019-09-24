import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import {createBrowserHistory} from 'history';
import {createLogger} from 'redux-logger';

import rootReducer from './rootReducer';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer(history),
        initialState,
        applyMiddleware(sagaMiddleware, createLogger()),
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}
