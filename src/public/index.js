const React = require('react');
const ReactDOM = require('react-dom');
const ProductView = require('./components/ProductView');

ReactDOM.hydrate(
  <ProductView name={window.__INITIAL__DATA__.name} />,
  document.getElementById('root'),
);
