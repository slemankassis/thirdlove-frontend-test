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
    <Container fluid className="container__main">
      <Row>
        <Label className="product-title__label" text={title} />
      </Row>
      <Row md="8">
        <Col md="auto">
          <Row md="8">
            {images && (
              <Carousel images={images} />
            )}
          </Row>
        </Col>
        <Col md="auto">
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
        </Col>
      </Row>
      <Col>
        {bodyHtml && (
          <Row md="auto" className="product-description">
            <hr className="division" />
            <Description className="product-description__content" contentHtml={bodyHtml} />
          </Row>
        )}
      </Col>
    </Container>
  );
};

ProductContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  selectedVariantId: PropTypes.string.isRequired,
  onChangeVariant: PropTypes.func.isRequired,
  variants: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  bodyHtml: PropTypes.string,
};

ProductContainer.defaultProps = {
  images: [],
  title: '',
  bodyHtml: '',
};

export default ProductContainer;
