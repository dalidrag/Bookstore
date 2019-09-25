import {all,call, fork} from 'redux-saga/effects';
import * as watchers from './sagasWatchers';
import {connectedRouterSaga} from '../router/connectedRouterSagas';
import routes from '../router/routes';

export function* rootSaga() {
    yield all([
        fork(watchers.watchFetchAllBooksRequest),
        fork(watchers.watchFetchBooksFromCategoryRequest),

        // connected router saga should be last in sequence!
        call(connectedRouterSaga, routes),
    ]);
}
