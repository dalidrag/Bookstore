import actionTypes from './actionTypes';

const initialState = {
  booksBucket: [{ id: 0, name: 'No books.', category: 'No category.' }]
};

const BooksFromCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_FROM_CATEGORY_SUCCESS:
      return {
        ...state,
        booksBucket: state.booksBucket.concat(action.books).filter(book => {
          return book.id !== 0;
        })
      };
    case actionTypes.FETCH_BOOKS_FROM_CATEGORY_ERROR:
      return {
        ...state,
        error: 'Something went wrong.'
      };
    default:
      return state;
  }
};

export default BooksFromCategoryReducer;
