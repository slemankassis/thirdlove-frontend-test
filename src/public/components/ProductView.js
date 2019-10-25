const React = require('react');

const ProductView = (props) => (
  <div>
    <button onClick={() => console.log(2)}>e</button>
    <h1>{`ProductView, ${props.name}`}</h1>
  </div>
);

module.exports = ProductView;
