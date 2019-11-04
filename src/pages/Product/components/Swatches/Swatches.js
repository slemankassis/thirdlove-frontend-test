import React from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
import { getColorsInHex } from '../../helpers';
import './swatches.scss';

class Swatches extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(hex) {
    this.props.onChange(hex);
  }

  render() {
    const { colors } = this.props;

    return (
      <CirclePicker
        colors={getColorsInHex(colors)}
        onChange={(color) => {
          this.handleChange(color.hex);
        }}
      />
    );
  }
}

Swatches.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};

Swatches.defaultProps = {
  onChange: null,
};

export default Swatches;
