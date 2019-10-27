import React from 'react';
import Carousel from './../../components/Carousel';

const transformImagesData = (images) => {
  const transformImages = [];
  images.forEach((image) => {
    transformImages.push({
      thumbnail: `https://${image.src100}`,
      original: `https://${image.src600}`,
    });
  });
  console.log(transformImages);

  return transformImages;
};

class Product extends React.Component {
  render() {
    const transformedImagesData = transformImagesData(this.props.product.images);

    return (
      <Carousel images={transformedImagesData} />
    );
  }
}

export default Product;
