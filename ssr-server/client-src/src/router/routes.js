// import HomeView from '../view-home/HomeView';
import CategoryView from '../view-category/CategoryView';
// import {getAllBooksByCategory} from '../view-home/store/homeSaga';
// import {getBooksFromCategory} from '../view-category/store/categorySaga';

export default [
  {
    path: '/',
    exact: true,
    component: null
    // locationChangeSideEffects: [
    //     [getAllBooksByCategory],
    // ],
  },
  {
    path: '/category/:category',
    component: CategoryView
    // locationChangeSideEffects: [
    //     [getBooksFromCategory],
    // ],
  }
];
