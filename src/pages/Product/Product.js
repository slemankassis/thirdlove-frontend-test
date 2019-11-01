import React from 'react';
import Button from '../../thirdy-part-components/Button';
import Label from '../../thirdy-part-components/Label';
import {
  THUMBNAIL,
  ORIGINAL_LARGE,
  COLOR_VARIANTS,
  SIZE_VARIANTS,
  QTY_CHARS_FOR_BAND_SIZES,
  ID,
  TITLE,
  PRICE,
  STOCK,
} from './Constants';
import Carousel from './components/Carousel';
import VariantsContainer from './components/VariantsContainer';
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
      title: variant[TITLE],
      price: variant[PRICE],
      stock: variant[STOCK],
      color: variant[COLOR_VARIANTS],
      [SIZE_VARIANTS]: variant[SIZE_VARIANTS],
      band: `${variant[SIZE_VARIANTS][0]}${variant[SIZE_VARIANTS][1]}`,
      cup: variant[SIZE_VARIANTS].slice(QTY_CHARS_FOR_BAND_SIZES),
    })
    : transformedVariants
  ), [])
);

class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.onchangeVariant = this.onchangeVariant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToCart = this.addToCart.bind(this);

    console.log(this.props.product.variants[0]);

    this.state = {
      selectedVariant: this.props.product.variants[0].id,
    };
  }

  onchangeVariant(value) {
    this.state(() => ({
      selectedVariant: value,
    }));
  }

  handleSubmit(title, productId, { band, cup, id: variantId }) {
    alert(`Added a ${title} - ${band}${cup} to the cart`);
    this.addToCart(productId, variantId);
  }

  // eslint-disable-next-line no-unused-vars
  addToCart(productId, varianId) { // eslint-disable-line class-methods-use-this
    // TODO: Call service with productId and variantId and remove eslint exceptions
  }

  render() {
    const {
      product: {
        id,
        title,
        price,
        stock,
        images,
        variants,
        body_html: bodyHtml,
      },
    } = this.props;
    const { selectedVariant } = this.state;
    return (
      <React.Fragment>
        <Carousel images={transformImages(images)} />
        {/* TODO: Use form with input dropdown and radios */}
        {/* <form onSubmit={() => this.handleSubmit(title, id, variants[selectedVariant])}> */}
        <Label className="product-title" text={title} />
        {variants[selectedVariant] && (
          <Label className="product-color" text={`COLOR: ${variants[selectedVariant].color}`} />
        )}
        <Label className="product-price" text={price} />
        <VariantsContainer
          onChange={this.onchangeProduct}
          variants={transformVariants(variants)}
          selectedVariant={selectedVariant}
        />
        <Label className="product-stock" text={`STOCK: ${stock}`} />
        <input type="submit" value="Submit" />
        {/* </form> */}
        <Button
          type="action"
          text="Add to Bag"
          onClick={() => this.handleClick(title, id, variants[selectedVariant])}
        />
        <Description className="product-description" contentHtml={bodyHtml} />
      </React.Fragment>
    );
  }
}

export default Product;
