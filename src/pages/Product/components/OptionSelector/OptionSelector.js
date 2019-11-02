import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

class OptionSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.options[0],
    };
  }

  render() {
    return (
      <Dropdown
        selected={{ value: this.state.selected, label: this.state.selected }}
        options={this.props.options}
        onChange={this.props.onChange}
        label="CUP SIZE"
        name="cup-filters"
      />
    );
  }
}

export default OptionSelector;
