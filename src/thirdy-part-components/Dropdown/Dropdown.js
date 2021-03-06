import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './dropdown.scss';

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
      <div className="dropdown">
        <label htmlFor={this.state.selected.value}>
          {label}
          <Select
            value={this.props.selected}
            onChange={this.handleChange}
            options={transformFilters(options)}
          />
        </label>
      </div>
    );
  }
}

Dropdown.propTypes = {
  selected: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Dropdown.defaultProps = {
  selected: undefined,
  label: '',
};
export default Dropdown;
