import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import createStore from './store/createStore';
import {rootSaga} from './store/rootSaga';

import HomeViewContainer from './view-home/store/HomeViewContainer';
import CategoryViewContainer from './view-category/store/CategoryViewContainer';
import Header from './elements/header/header';
import './global-styles/global.scss';


const store = createStore();
store.runSaga(rootSaga);

ReactDOM.render(
    (
        <Provider store={store}>
            <div className="bs-screen-container">
                <div className="bs-content-container">
                    <Router>
                        <Header />
                        <Route path="/" exact component={HomeViewContainer} />
                        <Route path="/category/" component={CategoryViewContainer} />
                    </Router>
                </div>
            </div>
        </Provider>
    ),
    document.getElementById('app')
);
