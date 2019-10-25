const React = require('react');

const Hello = (props) => (
  <div>
  <button onClick={()=>console.log(2)}>e</button>
    <h1>{`Hello, ${props.name}`}</h1>
  </div>
);

module.exports = Hello;
