import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import './carousel.scss';

const Carousel = ({ images }) => <ImageGallery items={images} />;

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
