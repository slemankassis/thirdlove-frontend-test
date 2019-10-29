import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';
import Swatches from '../Swatches';

class ReviewFilters extends React.Component {
  render() {
    const {
      filterOptions,
      onChangeColorFilters,
      onChangeBandSizeFilters,
      onChangeCupSizeFilters,
    } = this.props;
    const { color, bandSize, cupSize } = filterOptions;

    console.log(filterOptions);

    return (
      <div>
        <Swatches colors={color} handleChange={onChangeColorFilters} />
        <Dropdown options={bandSize} onChange={onChangeBandSizeFilters} />
        <Dropdown options={cupSize} onChange={onChangeCupSizeFilters} />
      </div>
    );
  }
}

export default ReviewFilters;
