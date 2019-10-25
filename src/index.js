const compression = require('compression');
const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ProductView = require('./public/components/ProductView');

const app = express();

app.use(compression());

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  const { name = 'Name' } = req.query;

  const componentStream = ReactDOMServer.renderToNodeStream(
    <ProductView name={name} />,
  );

  const htmlStart = `
  <!doctype html>
    <html>
    <head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <div id="root">`;

  res.write(htmlStart);

  componentStream.pipe(
    res,
    { end: false },
  );

  const htmlEnd = `</div>
    <script src="/static/vendors~index.js"></script>
    <script src="/static/index.js"></script>
  </body>
  </html>`;

  componentStream.on('end', () => {
    res.write(htmlEnd);

    res.end();
  });
});

app.get('/with-react-router*', (req, res) => {  // without client side rendering
  const { name = 'Name' } = req.query;

  const component = ReactDOMServer.renderToString(
    <ProductView name={name} />,
  );

  const html = `
  <!doctype html>
    <html>
    <head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    <body>
      <div id="root">${component}</div>

      <script src="/static/vendors~index.js"></script>
      <script src="/static/vendors"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.get('*', (req, res) => res
  .status(404)
  .send(
    '<body style="background-color: #3c3c3c;"><h1 style="font-family: sans-serif; color: #c7c7c7; text-align: center;">404 - Not Found</h1></body>',
  ));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log('######## app running ########'));
