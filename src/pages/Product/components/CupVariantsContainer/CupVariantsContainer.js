import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';


class CupVariantsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCup: this.props.selectedCup,
    };
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.selectedColor);
    console.log(this.props.selectedColor);
    console.log(prevProps.selectedBand);
    console.log(this.props.selectedBand);

    if (prevProps.selectedColor !== this.props.selectedColor
      || prevProps.selectedBand !== this.props.selectedBand
    ) {
      this.props.getCupFilters();
    }
  }

  render() {
    return (
      <Dropdown
        selected={this.props.selectedCup}
        options={this.props.options}
        handleChange={this.props.onChangeCup}
        label="CUP SIZE"
        name="cup-filters"
      />
    );
  }
}

export default CupVariantsContainer;
