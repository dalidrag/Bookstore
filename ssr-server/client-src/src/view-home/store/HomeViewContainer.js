import { connect } from 'react-redux';
import * as homeViewActions from './actions';
import HomeView from '../HomeView';

const mapStateToProps = state => {
  return {
    allBooksByCategory: state.homeReducer.booksBucket
  };
};

const HomeViewContainer = connect(
  mapStateToProps,
  null
)(HomeView);

export default HomeViewContainer;
