import React from 'react';

class RoundPicker extends React.Component {
  render() {
    return (
      <input type="radio" value={this.props.value} />
    );
  }
}

export default RoundPicker;
