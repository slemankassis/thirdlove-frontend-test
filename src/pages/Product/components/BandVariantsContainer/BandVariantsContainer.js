import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

class BandVariantsContainer extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  // // componentDidMount() {
  // //   this.props.getBandFilters();
  // // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.selectedColor !== this.props.selectedColor
  //   ) {
  //     this.props.getBandFilters();
  //     // if (!this.props.options && this.props.options.includes({ value: this.props.selectedBand, label: this.props.selectedBand })) {
  //     //   this.props.onChange(this.props.options[0].value);
  //     // }
  //   }
  // }

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
