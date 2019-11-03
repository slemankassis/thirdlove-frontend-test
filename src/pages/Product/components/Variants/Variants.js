import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../../thirdy-part-components/Label';
import Swatches from '../../../../thirdy-part-components/Swatches';
import {
  removeDuplicates,
  getObjFromArrayByKey,
  formatPrice,
  swapObj,
} from '../../../../helpers';
import Dropdown from '../../../../thirdy-part-components/Dropdown';
import { COLORS } from '../../Constants';
import { getVariant } from '../../helpers';
import Button from '../../../../thirdy-part-components/Button';
import './variants.scss';

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

    const selectedVariant = getVariant({
      variants: this.props.variants,
      color: selectedColor,
      band: selectedBand,
      cup: selectedCup,
    });

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
      selectedColor: swapObj(COLORS)[value],
    }));
  }

  onChangeBand({ value }) {
    this.setState(() => ({
      selectedBand: value,
    }), this.getCupFilters(value));
  }

  // TODO: Unify onChangeBand and onChangeCup in one method called onChangeSize
  onChangeCup({ value }) {
    this.setState(() => ({
      selectedCup: value,
    }), this.getBandFilters(value));
  }

  render() {
    const selectedVariant = getObjFromArrayByKey(this.props.variants, this.props.selectedVariantId)
      || this.props.variants[0];

    const {
      color,
      price,
      stock,
      band,
      cup,
    } = selectedVariant;

    const colors = this.getColorFilters();

    // TODO: Use form with input dropdown and radios
    return (
      <div className="variants">
        <Label className="variants-color" text={`COLOR: ${color}`} />
        <Label className="variants-price" text={formatPrice(price)} />
        <Label text="COLOR" value="__selected__" />
        {colors && (
          <Swatches
            selected={this.state.selectedColor}
            colors={colors}
            onChange={this.onChangeColor}
          />
        )}
        <Label className="variants-stock" text={`STOCK: ${stock}`} />
        <div className="variants-sizes__container">
          <div className="variants-band__selector">
            <Dropdown
              selected={{ value: this.state.selectedBand, label: this.state.selectedBand }}
              options={this.state.bandFilters}
              onChange={this.onChangeBand}
              label="BAND SIZE"
            />
          </div>
          <div className="variants-cup__selector">
            <Dropdown
              selected={{ value: this.state.selectedCup, label: this.state.selectedCup }}
              options={this.state.cupFilters}
              onChange={this.onChangeCup}
              label="CUP SIZE"
            />
          </div>
        </div>
        <Button
          text="Add to Bag"
          onClick={() => this.props.handleSubmit({ color, band, cup })}
        />
      </div>
    );
  }
}

Variants.propTypes = {
  selectedVariantId: PropTypes.string.isRequired,
  onChangeVariant: PropTypes.func.isRequired,
  variants: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Variants;
