import {connect} from 'react-redux';
import * as homeViewActions from './actions';
import HomeView from '../HomeView';

const mapStateToProps = state => {
    return {
        allBooksByCategory: state.homeReducer.booksBucket,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBooksByCategory: payload => dispatch(homeViewActions.fetchAllBooksByCategory(payload)),
    };
};

const HomeViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);

export default HomeViewContainer;
