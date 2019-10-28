import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <select>
        {this.props.values.map((value) => (
          <option key={value} value={value}>
            {`${value}`}
          </option>
        ))}
      </select>
    );
  }
}

export default Dropdown;
