import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

class BandVariantsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBand: this.props.selectedBand,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedColor !== this.props.selectedColor) {
      this.props.getBandFilters();
    }
  }

  render() {
    return (
      <Dropdown
        selected={this.props.selectedBand}
        options={this.props.options}
        handleChange={this.props.onChangeBand}
        label="BAND SIZE"
        name="band-filters"
      />
    );
  }
}

export default BandVariantsContainer;
