import React from 'react';
import {Switch, Route} from 'react-router-dom';

// TODO make it async? should wait for side effects to finish
function renderRoutes(routes) {
    return routes ? (
        <Switch>
            {routes.map((route, i) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    render={props =>
                        <route.component {...props} route={route} />
                    }
                />
            ))}
        </Switch>
    ) : null;
}

export default renderRoutes;
