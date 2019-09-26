import { put, call } from 'redux-saga/effects';

import { bookCategories } from '../../config/bookCategories';

import actionTypes from './actionTypes';
import { getBooksByCategory } from '../../api-service/apiMediaService';

export const getAllBooksByCategory = function*() {
  try {
    for (const bookCategory of bookCategories) {
      const books = yield call(getBooksByCategory, bookCategory);
      books.forEach(book => {
        if (book) book.img = '';
      });
      yield put({ type: actionTypes.FETCH_ALL_BOOKS_SUCCESS, books });
    }
  } catch (error) {
    yield put({ type: actionTypes.FETCH_ALL_BOOKS_ERROR, error });
  }
};
