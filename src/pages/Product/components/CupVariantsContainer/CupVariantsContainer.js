import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

class CupVariantsContainer extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  // componentDidMount() {
  //   this.props.getCupFilters();
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.selectedColor !== this.props.selectedColor
  //   ) {
  //     this.props.getCupFilters();
  //   } else if (prevProps.selectedCup !== this.props.selectedCup) {
  //     this.props.onChange(this.props.options[0]);
  //   }
  //     // if (!this.props.options && this.props.options.includes({ value: this.props.selectedCup, label: this.props.selectedCup })) {
  //     //   this.props.onChange(this.props.options[0].value);
  //     // }
  // }

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
