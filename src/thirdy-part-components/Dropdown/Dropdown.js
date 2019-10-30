import React from 'react';

const Dropdown = ({ options, handleChange }) => (
  <select onChange={handleChange}>
    {options.map((value) => (
      <option key={value} value={value}>
        {`${value}`}
      </option>
    ))}
  </select>
);

export default Dropdown;
