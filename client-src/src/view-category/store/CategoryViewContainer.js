import {connect} from 'react-redux';
import * as categoryViewActions from './actions';
import CategoryView from '../CategoryView';

const mapStateToProps = state => {
    return {
        booksFromCategory: state.categoryReducer.booksBucket,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBooksFromCategory: category => dispatch(categoryViewActions.fetchBooksFromCategory(category)),
    };
};

const CategoryViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryView);

export default CategoryViewContainer;
