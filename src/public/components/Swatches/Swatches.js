const React = require('react');
const RoundSelector = require('./../../thirdy-part-components/RoundPicker');

class Swatches extends React.Component {
  render() {
    console.log(this.props);

    return (
      <RoundSelector />
    );
  }
}

module.exports = Swatches;
