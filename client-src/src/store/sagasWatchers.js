import {takeEvery} from 'redux-saga/effects';
import {getAllBooksByCategory} from '../view-home/store/homeSaga';
import homeActionTypes from '../view-home/store/actionTypes';

// Watches for FETCH_ALL_BOOKS_REQUEST action type asynchronously
export function* watchFetchAllBooksRequest() {
    yield takeEvery(homeActionTypes.FETCH_ALL_BOOKS_REQUEST, getAllBooksByCategory);
}

