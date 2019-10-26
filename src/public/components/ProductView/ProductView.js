const React = require('react');
const Carousel = require('./../Carousel');
const VariantsSelectors = require('./../VariantsSelectors');

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

class ProductView extends React.Component {
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

module.exports = ProductView;
