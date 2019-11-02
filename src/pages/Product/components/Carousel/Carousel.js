import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

import './carousel.scss';

class Carousel extends React.Component {
  render() {
    // TODO: Filter images by color
    return (
      <ImageGallery items={this.props.images} />
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
