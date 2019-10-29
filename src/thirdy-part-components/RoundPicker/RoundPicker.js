import React from 'react';

class RoundPicker extends React.Component {
  render() {
    const { value, handleChange, name } = this.props;
    return (
      <input type="radio" value={value} onChange={handleChange} name={name} />
    );
  }
}

export default RoundPicker;
