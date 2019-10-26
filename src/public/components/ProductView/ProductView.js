const React = require('react');
const Carousel = require('./../Carousel');

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

class ProductView extends React.Component {
  render() {
    const transformedImagesData = transformImagesData(this.props.product.images);

    return (
      <Carousel images={transformedImagesData} />
    );
  }
}

module.exports = ProductView;
