import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../../thirdy-part-components/Label';
import Carousel from '../Carousel';
import Variants from '../Variants';
import Description from '../Description';

const ProductContainer = ({
  images,
  title,
  selectedVariantId,
  onChangeVariant,
  variants,
  handleSubmit,
  bodyHtml,
}) => (
    <React.Fragment>
      {images && (
        <Carousel images={images} />
      )}
      <Label className="product-title__label" text={title} />
      {variants && (
        <Variants
          selectedVariantId={selectedVariantId}
          onChangeVariant={onChangeVariant}
          variants={variants}
          handleSubmit={handleSubmit}
        />
      )}

      {bodyHtml && (
        <Label className="product-description__label" text="DESCRIPTION" />
        <Description className="product-description" contentHtml={bodyHtml} />
      )}
    </React.Fragment>
  );

// ProductContainer.propTypes = {
//   selectedVariantId: PropTypes.string.isRequired,
//   onChangeVariant: PropTypes.func.isRequired,
//   variants: PropTypes.arrayOf(PropTypes.object).isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ProductContainer;
