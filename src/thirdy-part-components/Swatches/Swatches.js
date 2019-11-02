import React from 'react';

const Swatches = ({ selected, onChange, options }) => (
  options.map((value) => (
    <div key={value}>
      <input
        type="radio"
        name="swatches"
        id={value}
        value={value}
        onChange={() => onChange(value)}
        checked={value === selected}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  ))
);

export default Swatches;
