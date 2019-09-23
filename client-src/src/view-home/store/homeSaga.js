import {put, call} from 'redux-saga/effects';

import actionTypes from './actionTypes';
import {getBooksByCategory} from '../../api-service/apiMediaService';

export function* getAllBooksByCategory({payload}) {
    try {
        const books = yield call(getBooksByCategory, payload.category);
        books.forEach(book => {
            book.img = '';
        });
        yield put({type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, books});
    } catch (error) {
        yield put({type: actionTypes.FETCH_ALL_BOOKS_ERROR, error});
    }
}
