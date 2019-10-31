import React from 'react';

const Swatches = ({ options, onChange }) => (
  options.map((value) => (
    <div key={value}>
      <input type="radio" id={value} value={value} onChange={() => onChange(value)} name="swatches" />
      <label htmlFor={value}>{value}</label>
    </div>
  ))
);

export default Swatches;
