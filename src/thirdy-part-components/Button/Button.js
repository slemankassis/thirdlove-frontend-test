import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({ text, className }) => (
  <button className={classnames(text, className)} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  className: '',
};

export default Button;
