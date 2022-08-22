export default function template(title, content = '') {
  let scripts = ` <script src="public/build/bundle.js"> </script> `;
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="assets/app.css">
                <link rel="stylesheet" href="assets/index.css">
              </head>
              <body>
                <div id="app" class="wrap-inner">${content}</div>
                ${scripts}
              </body>
              </html>
              `;

  return page;
}
