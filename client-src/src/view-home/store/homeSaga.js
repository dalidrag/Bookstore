import {put} from 'redux-saga/effects';
import actionTypes from './actionTypes';

export function* getAllBooksByCategory({payload}) {
    try {
        yield put({type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, payload});
    } catch (error) {
        yield put({type: actionTypes.FETCH_ALL_BOOKS_ERROR, error});
    }
}
