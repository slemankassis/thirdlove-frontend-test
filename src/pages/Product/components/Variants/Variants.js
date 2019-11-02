import React from 'react';
import Swatches from '../../../../thirdy-part-components/Swatches';
import { removeDuplicates } from '../../../../utils';
import Sizes from '../Sizes';

class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.getColorFilters = this.getColorFilters.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.getBands = this.getBands.bind(this);
    this.getCups = this.getCups.bind(this);

    this.state = {
      selectedColor: this.props.variants[0].color,
      bands: [this.props.variants[0].band],
      cups: [this.props.variants[0].cup],
    };
  }

  getColorFilters() {
    const colorFilters = new Set();
    this.props.variants.forEach((variant) => {
      colorFilters.add(variant.color);
    });
    return [...colorFilters];
  }

  onChangeColor(value) {
    this.setState(() => ({
      selectedColor: value,
    }));
  }

  getBands(cup = '-') {
    const bands = [];
    this.props.variants.forEach((variant) => {
      if (variant.color === this.props.selectedColor
        && (variant.cup === cup || cup === '-')
      ) {
        bands.push(variant.band);
      }
    });
    const bandsArray = removeDuplicates(bands);
    this.setState(() => ({
      bands: bandsArray,
    }));
  }

  getCups(band = '-') {
    const cups = [];
    this.props.variants.forEach((variant) => {
      if (variant.color === this.props.selectedColor
        && (variant.band === band || band === '-')
      ) {
        cups.push(variant.cup);
      }
    });
    const cupsArray = removeDuplicates(cups);
    this.setState(() => ({
      cups: cupsArray,
    }));
  }

  render() {
    console.log(this.props.variants);

    return (
      <div>
        <Swatches
          selected={this.state.selectedColor}
          options={this.getColorFilters()}
          onChange={this.onChangeColor}
        />
        <Sizes
          selectedColor={this.state.selectedColor}
          onChangeColor={this.onChangeColor}
          selectedVariantId={this.props.selectedVariantId}
          onchangeVariant={this.props.onchangeVariant}
          variants={this.props.variants}
          getBands={this.getBands}
          getCups={this.getCups}
          bands={this.state.bands}
          cups={this.state.cups}
        />
      </div>
    );
  }
}

export default Variants;
