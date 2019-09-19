import actionTypes from './actionTypes';

export const fetchAllBooksByCategory = (payload = {}) => ({type: actionTypes.FETCH_ALL_BOOKS_REQUEST, payload});
