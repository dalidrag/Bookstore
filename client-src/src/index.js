import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router'
import createStore, {history} from './store/createStore';
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
            <ConnectedRouter history={history}>
                <div className="bs-screen-container">
                    <div className="bs-content-container">
                        <Header />
                        <Route path="/" exact component={HomeViewContainer} />
                        <Route path="/category/" component={CategoryViewContainer} />
                    </div>
                </div>
            </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('app')
);
