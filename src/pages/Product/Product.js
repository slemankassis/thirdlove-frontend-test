import React from 'react';
import PropTypes from 'prop-types';
import {
  transformImages,
  transformVariants,
} from './helpers';
import {
} from '../../helpers';
import './Product.scss';
import ProductContainer from './components/ProductContainer/ProductContainer';

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
    band,
    cup,
  }) {
    const {
      product: {
        id: productId,
        title,
      },
    } = this.props;
    // eslint-disable-next-line no-alert
    alert(`Added a ${title} - ${band}${cup} to the cart`);
    this.addToCart(productId, this.state.selectedVariantId);
  }

  // eslint-disable-next-line no-unused-vars
  addToCart(productId, varianId) { // eslint-disable-line class-methods-use-this
    // TODO: Call api service with productId and variantId and remove eslint exceptions
  }

  render() {
    const {
      product: {
        title,
        images,
        variants,
        body_html: bodyHtml,
      },
    } = this.props;
    const { selectedVariantId } = this.state;

    // TODO: Use form with input dropdown and radios
    return (
      <ProductContainer
        images={transformImages(images)}
        selectedVariantId={selectedVariantId}
        onChangeVariant={this.onChangeVariant}
        variants={transformVariants(variants)}
        handleSubmit={this.handleSubmit}
        title={title}
        contentHtml={bodyHtml}
      />
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

export default Product;
