import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import renderRoutes from './client-src/src/router/renderRoutes';
import routes from './client-src/src/router/routes';
import Header from './client-src/src/elements/header/header';

export default (req, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div className="bs-screen-container">
        <div className="bs-content-container">
          <Header />
          {renderRoutes(routes)}
        </div>
      </div>
    </StaticRouter>
  );

  return `<!DOCTYPE html>
            <head>
                <title>Bookstore SSR</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" type="text/css" href="http://localhost:4000/styles.min.css" />
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
    </html>`;
};
