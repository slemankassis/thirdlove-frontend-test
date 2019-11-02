import React from 'react';
import PropTypes from 'prop-types';
import { sanitizeHtml } from '../../../../helpers';
import './description.scss';

const Description = ({ contentHtml, className }) => (
  <div className={className}>
    {sanitizeHtml(contentHtml, ['meta', 'p', 'ul', 'li', 'span'])}
  </div>
);

Description.propTypes = {
  contentHtml: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Description.defaultProps = {
  className: '',
};

export default Description;
