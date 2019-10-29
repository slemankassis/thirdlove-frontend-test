import React from 'react';
import RoundPicker from '../../../../thirdy-part-components/RoundPicker';

class Swatches extends React.Component {
  render() {
    const { colors, handleChange } = this.props;

    return (
      colors.map(({ value }) => <RoundPicker key={value} value={value} onChange={handleChange} name="color" />)
    );
  }
}

export default Swatches;
