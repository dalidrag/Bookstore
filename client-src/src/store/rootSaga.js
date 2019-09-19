import {all} from 'redux-saga/effects';
import * as watchers from './sagasWatchers';

export function* rootSaga() {
    yield all([
        watchers.watchFetchAllBooksRequest(),
    ]);
}
