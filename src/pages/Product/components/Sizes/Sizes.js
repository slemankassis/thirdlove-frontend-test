import React from 'react';
import { removeDuplicates } from '../../../../utils';
import { getSelectedVariant } from '../../utils';
import OptionSelector from '../OptionSelector';

class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeBand = this.onChangeBand.bind(this);
    this.onChangeCup = this.onChangeCup.bind(this);

    this.state = {
      selectedBand: this.props.bands[0],
      selectedCup: this.props.cups[0],
    };
  }

  componentDidMount() {
    this.props.getBands(this.props.variants[0].cup);
    this.props.getCups(this.props.variants[0].band);
  }

  onChangeBand(value) {
    console.log('onChangeBand');

    this.setState(() => ({
      selectedBand: value.value,
    }));
  }

  onChangeCup(value) {
    console.log('onChangeCup');

    this.setState(() => ({
      selectedCup: value.value,
    }));
  }

  render() {
    console.log(this.state);

    const selectedVariant = getSelectedVariant(
      this.props.variants,
      this.props.selectedColor,
      this.state.selectedBand,
      this.state.selectedCup,
    );

    if (selectedVariant.length) {
      if (this.props.onchangeVariant(selectedVariant[0].id) !== this.props.variants[this.props.selectedVariantId]) {
        this.props.onchangeVariant(selectedVariant[0].id);
        console.log(selectedVariant[0].id);
        console.log(this.props.variants[this.props.selectedVariantId]);
      }

    } else {
      console.log(12122);

      this.getBands();
      this.getCups();
    }

    return (
      <div>
        <OptionSelector
          selected={this.state.selectedBand}
          options={this.props.bands}
          onChange={this.onChangeBand}
          getBands={this.getBands}
        />
        <OptionSelector
          selected={this.state.selectedCup}
          options={this.props.cups}
          onChange={this.onChangeCup}
          getCups={this.getCups}
        />
      </div>
    );
  }
}

export default Variants;
