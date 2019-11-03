import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Label from '../../../../thirdy-part-components/Label';
import Carousel from '../Carousel';
import Variants from '../Variants';
import Description from '../Description';
import './product-container.scss';

const ProductContainer = ({
  images,
  title,
  selectedVariantId,
  onChangeVariant,
  variants,
  handleSubmit,
  bodyHtml,
}) => {
  return (
    <Container fluid>
      <Row>
        <Label className="product-title__label" text={title} />
      </Row>
      {images && (
        <Row>
          <Carousel images={images} />
        </Row>
      )}
      <Col>
        {variants && (
          <Row>
            <Variants
              selectedVariantId={selectedVariantId}
              onChangeVariant={onChangeVariant}
              variants={variants}
              handleSubmit={handleSubmit}
            />
          </Row>
        )}
        {bodyHtml && (
          <Row className="product-description">
            <Label className="product-description__label" text="DESCRIPTION" />
            <Description className="product-description__content" contentHtml={bodyHtml} />
          </Row>
        )}
      </Col>
    </Container>
  );
};
// ProductContainer.propTypes = {
//   selectedVariantId: PropTypes.string.isRequired,
//   onChangeVariant: PropTypes.func.isRequired,
//   variants: PropTypes.arrayOf(PropTypes.object).isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ProductContainer;
