import HomeViewContainer from '../view-home/store/HomeViewContainer';
import CategoryViewContainer from '../view-category/store/CategoryViewContainer';

export default [
    {
        path: '/',
        exact: true,
        component: HomeViewContainer,
        locationChangeSideEffects: [
            [],
        ],
    },
    {
        path: '/category/',
        component: CategoryViewContainer,
        locationChangeSideEffects: [
            [],
        ],
    },
];
