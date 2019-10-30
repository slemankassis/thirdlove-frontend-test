import React from 'react';
import Swatches from '../Swatches';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

const Variants = ({
  options: { colorFilters, bandFilters, cupFilters },
  handlersChange: { onChangeColor, onChangeBand, onChangeCup },
}) => (
  <div>
    <Swatches options={colorFilters} onClick={onChangeColor} />
    <Dropdown options={bandFilters} onChange={onChangeBand} />
    {/* <Dropdown options={cupFilters} onChange={onChangeCup} /> */}
  </div>
);

export default Variants;
