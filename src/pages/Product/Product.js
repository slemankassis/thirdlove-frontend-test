import React from 'react';
import Constants from './Constants';
import Carousel from './components/Carousel';
import VariantsSelectors from './components/VariantsSelectors';

const transformImagesData = (images) => {
  const transformImages = [];
  images.forEach((image) => {
    transformImages.push({
      thumbnail: `https://${image[Constants.IMAGES.THUMBNAIL]}`,
      original: `https://${image[Constants.IMAGES.ORIGINAL_LARGE]}`,
    });
  });
  return transformImages;
};

class Product extends React.Component {
  render() {
    const { images, variants } = this.props.product;

    const transformedImagesData = transformImagesData(images);

    return (
      <React.Fragment>
        <Carousel images={transformedImagesData} />
        <VariantsSelectors variants={variants} />
      </React.Fragment>
    );
  }
}

export default Product;