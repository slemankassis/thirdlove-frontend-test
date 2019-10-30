import React from 'react';

const RoundPicker = ({ value, handleChange, name }) => (
  <div>
    <input type="radio" value={value} onClick={handleChange} name={name} />
    <label>{value}</label>
  </div>
);

export default RoundPicker;
