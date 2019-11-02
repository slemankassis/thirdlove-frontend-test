import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({ text, onClick, className }) => (
  <button className={classnames(text, className)} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  className: '',
  onClick: () => { },
};

export default Button;
