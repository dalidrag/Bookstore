import {takeEvery} from 'redux-saga/effects';

import {getAllBooksByCategory} from '../view-home/store/homeSaga';
import {getBooksFromCategory} from '../view-category/store/categorySaga';
import homeActionTypes from '../view-home/store/actionTypes';
import categoryActionTypes from '../view-category/store/actionTypes';

// Watches for FETCH_ALL_BOOKS_REQUEST action type asynchronously
export function* watchFetchAllBooksRequest() {
    yield takeEvery(homeActionTypes.FETCH_ALL_BOOKS_REQUEST, getAllBooksByCategory);
}
export function* watchFetchBooksFromCategoryRequest() {
    yield takeEvery(categoryActionTypes.FETCH_BOOKS_FROM_CATEGORY_REQUEST, getBooksFromCategory);
}

