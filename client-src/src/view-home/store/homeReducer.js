import actionTypes from './actionTypes';

const initialState = {
    booksBucket: 'No books',
};

const allBooksByCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                booksBucket: action.payload,
            };
        default:
            return state;
    }
};

export default allBooksByCategoryReducer;
