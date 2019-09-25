import {connect} from 'react-redux';
import CategoryView from '../CategoryView';

const mapStateToProps = state => {
    return {
        booksFromCategory: state.categoryReducer.booksBucket,
    };
};

const CategoryViewContainer = connect(
    mapStateToProps,
    null
)(CategoryView);

export default CategoryViewContainer;
