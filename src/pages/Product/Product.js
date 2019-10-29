import React from 'react';
import {
  THUMBNAIL,
  ORIGINAL_LARGE,
  COLOR_VARIANTS,
  SIZE_VARIANTS,
  QTY_CHARS_FOR_BAND_SIZES,
  ID,
  PRICE,
  STOCK,
} from './Constants';
import Carousel from './components/Carousel';
import VariantsSelectors from './components/VariantsSelectors';
import Description from './components/Description';
import './Product.scss';

const transformImages = (images) => (
  images.reduce((transformedImages, image) => (
    transformedImages.concat({
      thumbnail: `https://${image[THUMBNAIL]}`,
      original: `https://${image[ORIGINAL_LARGE]}`,
    })
  ), [])
);

const transformVariants = (variants) => (
  variants.reduce((transformedVariants, variant) => (variant[STOCK] >= 10
    ? transformedVariants.concat({
      id: variant[ID],
      price: variant[PRICE],
      stock: variant[STOCK],
      color: variant[COLOR_VARIANTS],
      [SIZE_VARIANTS]: variant[SIZE_VARIANTS],
      bandSize: `${variant[SIZE_VARIANTS][0]}${variant[SIZE_VARIANTS][1]}`,
      cupSize: variant[SIZE_VARIANTS].slice(QTY_CHARS_FOR_BAND_SIZES),
    })
    : transformedVariants
  ), [])
);

class Product extends React.Component {
  render() {
    const { images, variants, body_html: bodyHtml } = this.props.product;
    const transformedImagesData = transformImages(images);
    const transformedVariantsData = transformVariants(variants);

    return (
      <React.Fragment>
        <Carousel images={transformedImagesData} />
        <VariantsSelectors variants={transformedVariantsData} />
        <Description contentHtml={bodyHtml} className="product-description" />
      </React.Fragment>
    );
  }
}

export default Product;
