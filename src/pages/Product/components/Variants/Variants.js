import React from 'react';
import Swatches from '../Swatches';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

const Variants = ({
  options: { colorFilters, bandFilters, cupFilters },
  handlersChange: { onChangeColor, onChangeBand, onChangeCup },
}) => (
  <div>
    <Swatches options={colorFilters} onChange={onChangeColor} />
    <Dropdown options={bandFilters} handleChange={onChangeBand} label="BAND SIZE" name="band-filters" />
    <Dropdown options={cupFilters} handleChange={onChangeCup} label="CUP SIZE" name="cup-filters" />
  </div>
);

export default Variants;
