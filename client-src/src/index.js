import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './store/createStore';

import HomeViewContainer from './view-home/store/HomeViewContainer';


const store = createStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <HomeViewContainer />
        </Provider>
    ),
    document.getElementById('app')
);
