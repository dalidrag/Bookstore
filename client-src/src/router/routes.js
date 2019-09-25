import HomeViewContainer from '../view-home/store/HomeViewContainer';
import CategoryViewContainer from '../view-category/store/CategoryViewContainer';
import {getAllBooksByCategory} from '../view-home/store/homeSaga';
import {getBooksFromCategory} from '../view-category/store/categorySaga';

export default [
    {
        path: '/',
        exact: true,
        component: HomeViewContainer,
        locationChangeSideEffects: [
            [getAllBooksByCategory],
        ],
    },
    {
        path: '/category/:category',
        component: CategoryViewContainer,
        locationChangeSideEffects: [
            [getBooksFromCategory],
        ],
    },
];
