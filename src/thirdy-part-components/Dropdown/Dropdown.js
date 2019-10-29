import React from 'react';

class Dropdown extends React.Component {
  render() {
    const { options, handleChange } = this.props;
    return (
      <select>
        {options.map(({ value }) => (
          <option key={value} value={value} onChange={handleChange}>
            {`${value}`}
          </option>
        ))}
      </select>
    );
  }
}

export default Dropdown;
