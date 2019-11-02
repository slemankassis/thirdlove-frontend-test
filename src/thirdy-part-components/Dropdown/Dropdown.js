import React from 'react';
import Select from 'react-select';

const transformFilters = (filters) => (
  filters.reduce((transformedFilters, filter) => (
    transformedFilters.concat({
      value: filter,
      label: filter,
    })
  ), [])
);

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selected: this.props.selected,
    };
  }

  handleChange(value) {
    this.setState(() => ({
      selected: value,
    }));
    this.props.onChange(value);
  }

  render() {
    const { options, label } = this.props;

    return (
      <label htmlFor={this.state.selected}>
        {label}
        <Select
          value={this.state.selected}
          onChange={this.handleChange}
          options={transformFilters(options)}
        />
      </label>
    );
  }
}

export default Dropdown;
