import actionTypes from './actionTypes';

const initialState = {
    booksBucket: [{id: 1, name: 'No books.'}],
};

const allBooksByCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                booksBucket: action.books,
            };
        case actionTypes.FETCH_ALL_BOOKS_ERROR:
            return {
                ...state,
                error: 'Something went wrong.',
            };
        default:
            return state;
    }
};

export default allBooksByCategoryReducer;
