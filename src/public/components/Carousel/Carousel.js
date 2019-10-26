const React = require('react');
const ImageGallery = require('react-image-gallery').default;

require('./style_carousel.scss');

class Carousel extends React.Component {
  render() {
    return (
      <ImageGallery items={this.props.images} />
    );
  }
}

module.exports = Carousel;
