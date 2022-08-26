import React, { Fragment } from 'react';

const Html = ({ children, initialState, scripts, styles }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Meli | {initialState.query.search}</title>
        {styles.map((style) => (
          <link rel="stylesheet" href={style} />
        ))}
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
          <Fragment>
            <script key={index} src={item} />
          </Fragment>
        ))}
      </body>
    </html>
  );
};

export default Html;
