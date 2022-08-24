export default function template(title, content = '') {
  let scripts = ` <script src="public/bundle.js"> </script> `;
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div id="app" class="wrap-inner app">${content}</div>
                ${scripts}
              </body>
              </html>
              `;

  return page;
}
