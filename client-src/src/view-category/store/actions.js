import actionTypes from './actionTypes';

export const fetchBooksFromCategory = (category = {}) => (
    {type: actionTypes.FETCH_BOOKS_FROM_CATEGORY_REQUEST, category});
