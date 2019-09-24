import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './store/createStore';
import {rootSaga} from './store/rootSaga';

import HomeViewContainer from './view-home/store/HomeViewContainer';
import Header from './elements/header/header';
import './global-styles/global.scss';


const store = createStore();
store.runSaga(rootSaga);

ReactDOM.render(
    (
        <Provider store={store}>
            <div className="bs-screen-container">
                <div className="bs-content-container">
                    <Header />
                    <HomeViewContainer />
                </div>
            </div>
        </Provider>
    ),
    document.getElementById('app')
);
