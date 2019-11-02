import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../../thirdy-part-components/Label';
import Swatches from '../../../../thirdy-part-components/Swatches';
import { removeDuplicates } from '../../../../helpers';
import Dropdown from '../../../../thirdy-part-components/Dropdown';
import { getSelectedVariant } from '../../helpers';

class Variants extends React.Component {
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

  componentDidUpdate() {
    const { selectedColor, selectedBand, selectedCup } = this.state;

    const selectedVariant = getSelectedVariant(
      this.props.variants,
      selectedColor,
      selectedBand,
      selectedCup,
    );

    if (selectedVariant) {
      if (selectedVariant.id !== this.props.selectedVariantId) {
        this.props.onChangeVariant(selectedVariant.id);
      }
    } else {
      this.getBandFilters();
      this.getCupFilters();
    }
  }

  getColorFilters() {
    const colorFilters = new Set();
    this.props.variants.forEach((variant) => {
      colorFilters.add(variant.color);
    });
    return [...colorFilters];
  }

  getBandFilters(cup) {
    const bandFilters = [];
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor
        // If cup is not defined then bands don't be filtered by cup
        && (!cup || variant.cup === cup)
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

  getCupFilters(band) {
    const cupFilters = [];
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor
        // If band is not defined then bands don't be filtered by band
        && (!band || variant.band === band)
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
    this.setState(() => ({
      selectedBand: value.value,
    }), this.getCupFilters(value.value));
  }

  onChangeCup(value) {
    this.setState(() => ({
      selectedCup: value.value,
    }), this.getBandFilters(value.value));
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={() => this.handleSubmit(product = {})}> */}
        <Label text="COLOR" value="__selected__" />
        <Swatches
          selected={this.state.selectedColor}
          options={this.getColorFilters()}
          onChange={this.onChangeColor}
        />
        <Dropdown
          // selectedColor={this.state.selectedColor}
          selected={{ value: this.state.selectedBand, label: this.state.selectedBand }}
          options={this.state.bandFilters}
          onChange={this.onChangeBand}
          label="BAND SIZE"
        />
        <Dropdown
          // selectedColor={this.state.selectedColor}
          selected={{ value: this.state.selectedCup, label: this.state.selectedCup }}
          options={this.state.cupFilters}
          onChange={this.onChangeCup}
          label="CUP SIZE"
        />
        <Label text="STOCK" value="__selected__" />
        <input type="submit" value="Submit" />
        {/* </form> */}
      </div>
    );
  }
}

Variants.propTypes = {
  selectedVariantId: PropTypes.string.isRequired,
  onChangeVariant: PropTypes.func.isRequired,
  variants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Variants;