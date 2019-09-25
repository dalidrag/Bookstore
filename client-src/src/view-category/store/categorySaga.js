import {put, call} from 'redux-saga/effects';

import actionTypes from './actionTypes';
import {getBooksByCategory} from '../../api-service/apiMediaService';

export const getBooksFromCategory = function* ({payload}) {
    try {
        const {match} = payload;

        const books = yield call(getBooksByCategory, match.params.category);
        books.forEach(book => {
            if (book) book.img = '';
        });
        yield put({type: actionTypes.FETCH_BOOKS_FROM_CATEGORY_SUCCESS, books});
    } catch (error) {
        yield put({type: actionTypes.FETCH_BOOKS_FROM_CATEGORY_ERROR, error});
    }
};
