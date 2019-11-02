import React from 'react';
import PropTypes from 'prop-types';

class Swatches extends React.Component {
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
    const { options } = this.props;
    return (
      options.map((value) => (
        <div key={value}>
          <input type="radio" id={value} value={value} onChange={() => this.handleChange(value)} name="swatches" checked={value === this.state.selected} />
          <label htmlFor={value}>{value}</label>
        </div>
      ))
    );
  }
}

Swatches.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};

Swatches.defaultProps = {
  onChange: null,
};

export default Swatches;
