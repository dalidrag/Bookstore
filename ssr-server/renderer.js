import React from 'react';
import { renderToString } from 'react-dom/server';

export default (req, context) => {
  const content = renderToString(<div>Hello from React!</div>);
  return `<!DOCTYPE html>
            <head>
                <title>Bookstore SSR</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
    </html>`;
};
