const React = require('react');
const Swatches = require('./../Swatches');

class Variants extends React.Component {
  render() {
    return (
      <Swatches data={this.props.variants} />
    );
  }
}

module.exports = Variants;
