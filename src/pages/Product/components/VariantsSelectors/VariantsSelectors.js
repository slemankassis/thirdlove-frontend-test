import React from 'react';
import { JSONPath } from 'jsonpath-plus';
import {
  removeDuplicatesArray,
} from '../../../../utils';
import {
  NAME_COLOR_VARIANTS,
  NAME_SIZE_VARIANTS,
  QTY_CHARS_FOR_BAND_SIZES,
} from '../../Constants';
import Label from '../../../../thirdy-part-components/Label';
import Swatches from '../Swatches';
import SizesSelectors from '../SizesSelectors';

const getSizes = (sizes) => {
  const bandSizes = [];
  const cupSizes = [];

  sizes.forEach((size) => {
    bandSizes.push(`${size[0]}${size[1]}`);
    cupSizes.push(size.slice(QTY_CHARS_FOR_BAND_SIZES));
  });

  return {
    bandSizes: removeDuplicatesArray(bandSizes),
    cupSizes: removeDuplicatesArray(cupSizes),
  };
};

class Variants extends React.Component {
  constructor(props) {
    super(props);

    const sizes = JSONPath({
      path: `$..${NAME_SIZE_VARIANTS}`,
      json: this.props.variants,
    });

    this.state = {
      colors: removeDuplicatesArray(
        JSONPath({
          path: `$..${NAME_COLOR_VARIANTS}`,
          json: this.props.variants,
        }),
      ),
      sizes: getSizes(sizes),
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
