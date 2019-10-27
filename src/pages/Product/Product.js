import React from 'react';
import Carousel from '../../components/Carousel';

const transformImagesData = (images) => {
  const transformImages = [];
  images.forEach((image) => {
    transformImages.push({
      thumbnail: `https://${image.src100}`,
      original: `https://${image.src600}`,
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
