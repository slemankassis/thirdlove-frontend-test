import React from 'react';

const Swatches = ({ options, onClick }) => (
  options.map((value) => (
    <div key={value}>
      <input type="radio" id={value} value={value} onClick={() => onClick(value)} name="swatches" />
      <label htmlFor={value}>{value}</label>
    </div>
  ))
);

export default Swatches;
