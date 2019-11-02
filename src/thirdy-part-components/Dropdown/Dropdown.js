import React from 'react';
import PropTypes from 'prop-types';
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
    if (value.value !== this.props.selected.value) {
      this.setState(() => ({
        selected: value,
      }));
      this.props.onChange(value);
    }
  }

  render() {
    const { options, label } = this.props;

    return (
      <label htmlFor={this.state.selected.value}>
        {label}
        <Select
          value={this.props.selected}
          onChange={this.handleChange}
          options={transformFilters(options)}
        />
      </label>
    );
  }
}

Dropdown.propTypes = {
  selected: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Dropdown.defaultProps = {
  label: '',
};
export default Dropdown;
