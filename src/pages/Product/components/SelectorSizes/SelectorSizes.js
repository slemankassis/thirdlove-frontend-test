import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

const SelectorSizes = ({
  selectedSize,
  options,
  onChange,
  label,
}) => (
  <Dropdown
    selected={{ value: selectedSize, label: selectedSize }}
    options={options}
    onChange={onChange}
    label={label}
  />
);

export default SelectorSizes;
