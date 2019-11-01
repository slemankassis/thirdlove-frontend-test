import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

class BandVariantsContainer extends React.Component {
  render() {
    return (
      <Dropdown
        selected={{ value: this.props.selectedBand, label: this.props.selectedBand }}
        options={this.props.options}
        onChange={this.props.onChange}
        label="BAND SIZE"
        name="band-filters"
      />
    );
  }
}

export default BandVariantsContainer;
