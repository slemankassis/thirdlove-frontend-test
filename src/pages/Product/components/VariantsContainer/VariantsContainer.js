import React from 'react';
import Label from '../../../../thirdy-part-components/Label';
import Variants from '../Variants';

class VariantsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getColorFilters = this.getColorFilters.bind(this);
    this.getBandFilters = this.getBandFilters.bind(this);
    this.getCupFilters = this.getCupFilters.bind(this);
    this.getBandFiltersFromCup = this.getBandFiltersFromCup.bind(this);
    this.getCupFiltersFromBand = this.getCupFiltersFromBand.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeBand = this.onChangeBand.bind(this);
    this.onChangeCup = this.onChangeCup.bind(this);

    this.state = {
      selectedColor: this.props.variants[0].color,
      selectedBand: this.props.variants[0].band,
      selectedCup: null,
      bandFilters: [],
      cupFilters: [],
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

  getBandFilters() {
    const bandFilters = new Set();
    this.props.variants.forEach((variant) => {
      if (variant.color === this.state.selectedColor) {
        bandFilters.add(variant.band);
      }
    });
    this.setState(() => ({
      selectedBand: bandFilters[0],
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
      selectedCup: cupFilters[0],
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

  onChangeColor(e) {
    console.log("onChangeColor");

    this.setState(() => ({
      selectedColor: e.target.value,
    }));
    console.log(this.state);

    this.getBandFilters();
    this.getCupFilters();
  }

  onChangeBand(e) {
    console.log("onChangeBand");

    this.setState(() => ({
      selectedBand: e.target.value,
    }));
  }

  onChangeCup(e) {
    console.log("onChangeCup");

    this.setState(() => ({
      selectedCup: e.target.value,
    }));
  }

  // handleSubmit({ product }) {
  //   const { id, band, cup } = product;
  //   alert(`Added a ${id} - ${band}${cup} to the cart`);
  // }

  render() {
    console.log(this.state);

    return (
      <div>
        {/* <form onSubmit={() => this.handleSubmit(product = {})}> */}
        <Label text="COLOR" value="__selected__" />
        {/* Populate swatches with all colors. When the color change it will populate band and cup filters */}
        <Variants
          options={{
            colorFilters: this.getColorFilters(),
            bandFilters: this.state.bandFilters,
            cupFilters: this.state.cupFilters,
          }}
          handlersChange={{
            onChangeColor: this.onChangeColor,
            onChangeBand: this.onChangeBand,
            onChangeCup: this.onChangeCup,
          }}
          getBandFilters={this.getBandFilters}
        />
        <Label text="STOCK" value="__selected__" />
        <input type="submit" value="Submit" />
        {/* </form> */}
      </div>
    );
  }
}

export default VariantsContainer;
