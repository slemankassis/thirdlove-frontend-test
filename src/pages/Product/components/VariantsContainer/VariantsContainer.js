import React from 'react';
import Swatches from '../../../../thirdy-part-components/Swatches';
import { removeDuplicates } from '../../../../utils';
import CupVariantsContainer from '../CupVariantsContainer';
import BandVariantsContainer from '../BandVariantsContainer';

const selectedVariant = (variants, selectedColor, selectedBand, selectedCup) => (
  variants.filter((variant) => (
    (variant.color === selectedColor)
    && (variant.band === selectedBand)
    && (variant.cup === selectedCup)
  ))
);

class VariantsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getColorFilters = this.getColorFilters.bind(this);
    this.getBandFilters = this.getBandFilters.bind(this);
    this.getCupFilters = this.getCupFilters.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeBand = this.onChangeBand.bind(this);
    this.onChangeCup = this.onChangeCup.bind(this);

    this.state = {
      selectedColor: this.props.variants[0].color,
      selectedBand: this.props.variants[0].band,
      selectedCup: this.props.variants[0].cup,
      bandFilters: [this.props.variants[0].band],
      cupFilters: [this.props.variants[0].cup],
    };
  }

  componentDidMount() {
    this.getBandFilters();
    this.getCupFilters();
  }

  getColorFilters() {
    const colorFilters = new Set();
    this.props.variants.forEach((variant) => {
      colorFilters.add(variant.color);
    });
    return [...colorFilters];
  }

  getBandFilters(cup = '-') {
    const bandFilters = [];
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor
        && (variant.cup === cup || cup === '-')
      ) {
        bandFilters.push(variant.band);
      }
    });
    const bandFiltersArray = removeDuplicates(bandFilters);
    this.setState(() => ({
      bandFilters: bandFiltersArray,
      selectedBand: bandFiltersArray[0],
    }));
  }

  getCupFilters(band = '-') {
    const cupFilters = [];
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor
        && (variant.band === band || band === '-')
      ) {
        cupFilters.push(variant.cup);
      }
    });
    const cupFiltersArray = removeDuplicates(cupFilters);
    this.setState(() => ({
      cupFilters: cupFiltersArray,
      selectedCup: cupFiltersArray[0],
    }));
  }

  onChangeColor(value) {
    this.setState(() => ({
      selectedColor: value,
    }));
  }

  onChangeBand(value) {
    console.log('onChangeBand');

    this.setState(() => ({
      selectedBand: value.value,
    }), this.getCupFilters(value.value));
  }

  onChangeCup(value) {
    console.log('onChangeCup');

    this.setState(() => ({
      selectedCup: value.value,
    }), this.getBandFilters(value.value));
  }

  render() {
    console.log(this.state);

    const { selectedColor, selectedBand, selectedCup } = this.state;

    const product = selectedVariant(
      this.props.variants,
      selectedColor,
      selectedBand,
      selectedCup,
    );

    if (product.length) {
      this.setState({
        selectedVariant: product[0].id,
      });
      console.log(product[0]);
    } else {
      this.getBandFilters();
      this.getCupFilters();
    }

    return (
      <div>
        <Swatches
          selected={this.state.selectedColor}
          options={this.getColorFilters()}
          onChange={this.onChangeColor}
        />
        <BandVariantsContainer
          selectedColor={this.state.selectedColor}
          selectedBand={this.state.selectedBand}
          options={this.state.bandFilters}
          onChange={this.onChangeBand}
          getBandFilters={this.getBandFilters}
          updateSelectedField={this.updateSelectedField}
        />
        <CupVariantsContainer
          selectedColor={this.state.selectedColor}
          selectedCup={this.state.selectedCup}
          options={this.state.cupFilters}
          onChange={this.onChangeCup}
          getCupFilters={this.getCupFilters}
          updateSelectedField={this.updateSelectedField}
        />
      </div>
    );
  }
}

export default VariantsContainer;
