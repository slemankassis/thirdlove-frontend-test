import React from 'react';
import RoundPicker from '../../../../thirdy-part-components/RoundPicker';

const Swatches = ({ options, onChange }) => (
  options.map((value) => (
    <RoundPicker key={value} value={value} onClick={() => onChange(value)} name="swatches" />
  ))
);

export default Swatches;
