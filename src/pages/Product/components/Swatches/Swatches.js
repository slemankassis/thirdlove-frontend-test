import React from 'react';
import RoundPicker from '../../../../thirdy-part-components/RoundPicker';

class Swatches extends React.Component {
  render() {
    return (
      this.props.colors.map((color) => <RoundPicker key={color} value={color} />)
    );
  }
}

export default Swatches;
