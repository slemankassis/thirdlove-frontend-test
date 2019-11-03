import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selected: this.props.selected,
    };
  }

  handleChange(e) {
    const { value } = e.target;
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
          <select onChange={this.handleChange} value={this.props.selected}>
            {(options).map((value) => (
              <option key={value} value={value} checked={value === this.props.selected}>
                {value}
              </option>
            ))}
          </select>
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
