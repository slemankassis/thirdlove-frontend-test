import React from 'react';
import Label from '../../../../thirdy-part-components/Label';
import Swatches from '../Swatches';
import SizesSelectors from '../SizesSelectors';

class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        'naked-1',
        'naked-2',
        'naked-3',
        'naked-4',
        'naked-5',
      ],
      sizes: {
        bandSizes: [
          32,
          34,
          38,
        ],
        cupSizes: [
          'D',
          'E',
          'F',
          'E(DD)',
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <Label text="COLOR" value="__selected__" />
        <Swatches colors={this.state.colors} />
        <Label text="STOCK" value="__selected__" />
        <SizesSelectors sizes={this.state.sizes} />
      </div>
    );
  }
}

export default Variants;
