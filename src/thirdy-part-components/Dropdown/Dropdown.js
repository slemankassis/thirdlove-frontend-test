import React from 'react';
import Select from 'react-select';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.options[0],
    };
  }

  render() {
    const { options, handleChange, label } = this.props;

    return (
      <label>
        {label}
        <Select
          value={this.state.selectedOption}
          onChange={handleChange}
          options={options}
        />
      </label>
    );
  }
}

export default Dropdown;
