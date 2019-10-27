import React from 'react';
import Swatches from './../Swatches';

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
      <Swatches data={this.state.colors} />
    );
  }
}

export default Variants;
