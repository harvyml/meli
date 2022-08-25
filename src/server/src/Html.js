import React from 'react';

const Html = ({ children, initialState, scripts }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Meli | {initialState.query.search}</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />

        {initialState && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.APP_STATE=${JSON.stringify(initialState)}`,
            }}
          />
        )}

        {scripts.map((item, index) => (
          <script key={index} src={item} />
        ))}
      </body>
    </html>
  );
};

export default Html;
