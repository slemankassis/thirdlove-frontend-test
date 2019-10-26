const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');

require('./styles/variables.scss');

ReactDOM.hydrate(
  <App pageTitle={window.__INITIAL__DATA__.pageTitle} />,
  document.getElementById('root'),
);
