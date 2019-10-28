import React from 'react';
import Dropdown from '../../../../thirdy-part-components/Dropdown';

class SizesSelectors extends React.Component {
  render() {
    const { bandSizes, cupSizes } = this.props.sizes;

    return (
      <div>
        <Dropdown values={bandSizes} />
        <Dropdown values={cupSizes} />
      </div>
    );
  }
}

export default SizesSelectors;
