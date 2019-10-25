const React = require('react');
const ReactDOM = require('react-dom');
const ProductView = require('./components/ProductView');

ReactDOM.hydrate(
  <ProductView pageTitle={window.__INITIAL__DATA__.pageTitle} />,
  document.getElementById('root'),
);
