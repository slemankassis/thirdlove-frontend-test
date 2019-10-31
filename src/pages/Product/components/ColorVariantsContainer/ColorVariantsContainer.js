import React from 'react';
import Label from '../../../../thirdy-part-components/Label';
import CupVariantsContainer from '../CupVariantsContainer';
import BandVariantsContainer from '../BandVariantsContainer';
import Swatches from '../Swatches';

const transformFilters = (filters) => (
  filters.reduce((transformedFilters, filter) => (
    transformedFilters.concat({
      value: filter,
      label: filter,
    })
  ), [])
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
      bandFilters: [],
      cupFilters: [],
    };
  }

  getColorFilters() {
    const colorFilters = new Set();
    this.props.variants.forEach((variant) => {
      colorFilters.add(variant.color);
    });
    return [...colorFilters];
  }

  getBandFilters() {
    const bandFilters = new Set();
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor) {
        bandFilters.add(variant.band);
      }
    });
    this.setState(() => ({
      bandFilters: [...bandFilters],
    }));
  }

  getCupFilters() {
    const cupFilters = new Set();
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor
        && variant.band === this.state.selectedBand
      ) {
        cupFilters.add(variant.cup);
      }
    });
    this.setState(() => ({
      cupFilters: [...cupFilters],
    }));
  }

  getBandFiltersFromCup() {
    const bandFilters = new Set();
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor
        && variant.cup === this.state.selectedCup
      ) {
        bandFilters.add(variant.band);
      }
    });
    this.setState(() => ({
      bandFilters: [...bandFilters],
    }));
  }

  getCupFiltersFromBand() {
    const cupFilters = new Set();
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor
        && variant.band === this.state.selectedBand
      ) {
        cupFilters.add(variant.cup);
      }
    });
    this.setState(() => ({
      cupFilters: [...cupFilters],
    }));
  }

  onChangeColor(value) {
    console.log('onChangeColor');

    this.setState(() => ({
      selectedColor: value,
    }));
  }

  onChangeBand(value) {
    console.log('onChangeBand');

    this.setState(() => ({
      selectedBand: value,
    }));
  }

  onChangeCup(value) {
    console.log('onChangeCup');

    this.setState(() => ({
      selectedCup: value,
    }));
  }

  render() {
    console.log(this.state);

    const isValidProduct = () => this.props.variants.filter((variant) => {
      const {
        selectedColor,
        selectedBand,
        selectedCup,
      } = this.state;
      return (
        (variant.color === selectedColor)
          && (variant.band === selectedBand)
          && (variant.cup === selectedCup)
      );
    });

    console.log(!!isValidProduct().length);

    return (
      <div>
        {/* <form onSubmit={() => this.handleSubmit(product = {})}> */}
        <Label text="COLOR" value="__selected__" />
        <Swatches
          options={this.getColorFilters()}
          onChange={this.onChangeColor}
        />
        <BandVariantsContainer
          selectedColor={this.state.selectedColor}
          selectedBand={this.state.selectedBand}
          selectedCup={this.state.selectedCup}
          options={transformFilters(this.state.bandFilters)}
          onChange={this.onChangeBand}
          getBandFilters={this.getBandFilters}
        />
        <CupVariantsContainer
          selectedColor={this.state.selectedColor}
          selectedBand={this.state.selectedBand}
          selectedCup={this.state.selectedCup}
          options={transformFilters(this.state.cupFilters)}
          onChange={this.onChangeCup}
          getCupFilters={this.getCupFilters}
        />
        <Label text="STOCK" value="__selected__" />
        <input type="submit" value="Submit" />
        {/* </form> */}
      </div>
    );
  }
}

export default ColorVariantsContainer;
