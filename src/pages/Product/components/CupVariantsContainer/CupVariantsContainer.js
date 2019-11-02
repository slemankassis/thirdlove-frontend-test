import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

class CupVariantsContainer extends React.Component {
  render() {
    console.log(this.props.selectedCup);

    return (
      <Dropdown
        selected={{ value: this.props.selectedCup, label: this.props.selectedCup }}
        options={this.props.options}
        onChange={this.props.onChange}
        label="CUP SIZE"
        name="cup-filters"
      />
    );
  }
}

export default CupVariantsContainer;
