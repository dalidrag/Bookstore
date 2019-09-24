import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'
import createStore, {history} from './store/createStore';
import {rootSaga} from './store/rootSaga';

import renderRoutes from './router/renderRoutes';
import routes from './router/routes';
import './global-styles/global.scss';
import Header from './elements/header/header';


const store = createStore();
store.runSaga(rootSaga);

ReactDOM.render(
    (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="bs-screen-container">
                    <div className="bs-content-container">
                        <Header />
                        {renderRoutes(routes)}
                    </div>
                </div>
            </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('app')
);
