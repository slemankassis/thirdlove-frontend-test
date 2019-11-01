import React from 'react';
import Label from '../../../../thirdy-part-components/Label';
import CupVariantsContainer from '../CupVariantsContainer';
import BandVariantsContainer from '../BandVariantsContainer';
import Swatches from '../../../../thirdy-part-components/Swatches';
import { removeDuplicates } from '../../../../utils';

const isValidProduct = (variants, selectedColor, selectedBand, selectedCup) => (
  variants.filter((variant) => (
    (variant.color === selectedColor)
    && (variant.band === selectedBand)
    && (variant.cup === selectedCup)
  ))
);

class ColorVariantsContainer extends React.Component {
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

    const checkIsValidProduct = isValidProduct(
      this.props.variants,
      selectedColor,
      selectedBand,
      selectedCup,
    );

    console.log(!!checkIsValidProduct.length);

    if (!checkIsValidProduct.length) {
      console.log(1111);

      this.getBandFilters();
      this.getCupFilters();
      // this.onChangeBand(this.state.cupFilters[1]);
      // this.onChangeCup(this.state.bandFilters[1]);
      // this.onChangeBand(this.state.bandFilters[0]);
      // this.onChangeCup(this.state.cupFilters[0]);
    }

    return (
      <div>
        {/* <form onSubmit={() => this.handleSubmit(product = {})}> */}
        <Label text="COLOR" value="__selected__" />
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
        <Label text="STOCK" value="__selected__" />
        <input type="submit" value="Submit" />
        {/* </form> */}
      </div>
    );
  }
}

export default ColorVariantsContainer;
