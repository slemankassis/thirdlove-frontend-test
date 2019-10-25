const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter: Router } = require('react-router-dom');
const MultipleRoutes = require('./components/MultipleRoutes');

const BasicExample = () => (
  <Router>
    <MultipleRoutes />
  </Router>
);

ReactDOM.hydrate(<BasicExample />, document.getElementById('root'));
