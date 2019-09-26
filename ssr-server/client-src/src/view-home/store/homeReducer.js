import actionTypes from './actionTypes';

const initialState = {
  booksBucket: [{ id: 0, name: 'No books.', category: 'No category.' }]
};

const allBooksByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        booksBucket: state.booksBucket.concat(action.books).filter(book => {
          return book.id !== 0;
        })
      };
    case actionTypes.FETCH_ALL_BOOKS_ERROR:
      return {
        ...state,
        error: 'Something went wrong.'
      };
    default:
      return state;
  }
};

export default allBooksByCategoryReducer;
