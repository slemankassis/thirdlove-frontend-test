import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../thirdy-part-components/Button';
import Label from '../../thirdy-part-components/Label';
import Carousel from './components/Carousel';
import Variants from './components/Variants';
import Description from './components/Description';
import {
  transformImages,
  transformVariants,
  getObjsFromArrayByKey,
} from './helpers';
import { formatPrice } from '../../helpers';
import './Product.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeVariant = this.onChangeVariant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      selectedVariantId: this.props.product.variants[0].id.toString(),
    };
  }

  onChangeVariant(value) {
    this.setState(() => ({
      selectedVariantId: value,
    }));
  }

  handleSubmit({
    title,
    productId,
    band,
    cup,
    variantId,
  }) {
    // eslint-disable-next-line no-alert
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
        id: productId,
        title,
        images,
        variants,
        body_html: bodyHtml,
      },
    } = this.props;
    const { selectedVariantId } = this.state;

    const selectedVariant = getObjsFromArrayByKey(variants, selectedVariantId);
    if (!selectedVariant) {
      throw new Error('Unexpected error on get variant of product');
    }

    const transformedVariant = transformVariants([selectedVariant])[0];
    const {
      color,
      price,
      stock,
      band,
      cup,
    } = transformedVariant;

    return (
      <React.Fragment>
        {images && (
          <Carousel images={transformImages(images)} />
        )}
        {/* TODO: Use form with input dropdown and radios */}
        <Label className="product-title" text={title} />
        <Label className="product-color" text={`COLOR: ${color}`} />
        <Label className="product-price" text={formatPrice(price)} />
        {variants && (
          <Variants
            selectedVariantId={selectedVariantId}
            onChangeVariant={this.onChangeVariant}
            variants={transformVariants(variants)}
          />
        )}
        <Label className="product-stock" text={`STOCK: ${stock}`} />
        <Button
          text="Add to Bag"
          onClick={() => this.handleSubmit({
            title,
            productId: productId.toString(),
            band,
            cup,
            selectedVariantId,
          })}
        />
        {bodyHtml && (
          <Description className="product-description" contentHtml={bodyHtml} />
        )}
      </React.Fragment>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    variants: PropTypes.arrayOf(PropTypes.object).isRequired,
    body_html: PropTypes.string.isRequired,
  }).isRequired,
};

Product.default = {};

export default Product;
