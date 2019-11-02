import React from 'react';
import Button from '../../thirdy-part-components/Button';
import Label from '../../thirdy-part-components/Label';
import Carousel from './components/Carousel';
import Variants from './components/Variants';
import Description from './components/Description';
import { transformImages, transformVariants, getObjsFromArrayByKey } from './helpers';
import './Product.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.onchangeVariant = this.onchangeVariant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      selectedVariantId: this.props.product.variants[0].id,
    };
  }

  onchangeVariant(value) {
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
      throw new Error('Unexpected error getting variant of product');
    }

    const transformedVariant = transformVariants([selectedVariant]);
    const {
      color,
      price,
      stock,
      band,
      cup,
    } = transformedVariant;

    return (
      <React.Fragment>
        <Carousel images={transformImages(images)} />
        {/* TODO: Use form with input dropdown and radios */}
        {/* <form onSubmit={() => this.handleSubmit(title, id, variants[selectedVariantId])}> */}
        <Label className="product-title" text={title} />
        {variants[selectedVariantId] && (
          <Label className="product-color" text={`COLOR: ${color}`} />
        )}
        <Label className="product-price" text={price} />
        <Variants
          selectedVariantId={selectedVariantId}
          onchangeVariant={this.onchangeVariant}
          variants={transformVariants(variants)}
        />
        <Label className="product-stock" text={`STOCK: ${stock}`} />
        {/* </form> */}
        <Button
          type="action"
          text="Add to Bag"
          onClick={() => this.handleSubmit({
            title,
            productId,
            band,
            cup,
            selectedVariantId,
          })}
        />
        <Description className="product-description" contentHtml={bodyHtml} />
      </React.Fragment>
    );
  }
}

export default Product;
