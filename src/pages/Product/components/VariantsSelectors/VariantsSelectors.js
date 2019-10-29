import React from 'react';
import Label from '../../../../thirdy-part-components/Label';
import ReviewFilters from '../ReviewFilters/ReviewFilters';

class Variants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      variants: this.props.variants,
      activeFilters: {
        color: ['naked-1'],
        bandSize: [32],
        cupSize: ['E'],
      },
      colorFilters: [],
      bandSizeFilters: [],
      cupSizeFilters: [],
    };
  }

  getFilteredVariants() {
    const { variants } = this.state;

    return variants.filter((variant) => {
      const {
        colorFilters,
        bandSizeFilters,
        cupSizeFilters,
      } = this.state;

      return (
        (colorFilters.length && colorFilters.includes(variant.color))
        && (bandSizeFilters.length && bandSizeFilters.includes(variant.bandSize))
        && (cupSizeFilters.length && cupSizeFilters.includes(variant.cupSize))
      );
    });
  }

  getFilterOptions() {
    const { variants } = this.state;
    const sets = [new Set(), new Set(), new Set()];

    // Create sets with unique field values for the variants
    variants.forEach((variant) => {
      sets[0].add(variant.color);
      sets[1].add(variant.bandSize);
      sets[2].add(variant.cupSize);
    });

    return {
      color: [...sets[0]]
        .map((color) => ({ value: color })),
      bandSize: [...sets[1]]
        .map((bandSize) => ({ value: bandSize })),
      cupSize: [...sets[2]]
        .map((cupSize) => ({ value: cupSize })),
    };
  }

  onChangeColorFilters(e) {
    console.log(1);

    this.setState({
      colorFilters: e.map((opt) => opt.value),
    });
  }

  onChangeBandSizeFilters(e) {
    this.setState({
      bandSizeFilters: e.map((opt) => opt.value),
    });
  }

  onChangeCupSizeFilters(e) {
    this.setState({
      cupSizeFilters: e.map((opt) => opt.value),
    });
  }

  handleSubmit({ product }) {
    const { id, bandSize, cupSize } = product;
    alert(`Added a ${id} - ${bandSize}${cupSize} to the cart`);
  }

  render() {
    // const filteredVariants = this.getFilteredVariants();

    // alert(filteredVariants);

    return (
      <div>
        {/* <form onSubmit={() => this.handleSubmit(product = {})}> */}
        <Label text="COLOR" value="__selected__" />
        <ReviewFilters
          filterOptions={this.getFilterOptions()}
          onChangeColorFilters={this.onChangeColorFilters.bind(this)}
          onChangeBandSizeFilters={this.onChangeBandSizeFilters.bind(this)}
          onChangeCupSizeFilters={this.onChangeCupSizeFilters.bind(this)}
        />
        <Label text="STOCK" value="__selected__" />
        <input type="submit" value="Submit" />
        {/* </form> */}
      </div>
    );
  }
}

export default Variants;
