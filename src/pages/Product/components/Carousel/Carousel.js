import React from 'react';
import ImageGallery from 'react-image-gallery';

import './carousel.scss';

class Carousel extends React.Component {
  render() {
    return (
      <ImageGallery items={this.props.images} />
    );
  }
}

export default Carousel;