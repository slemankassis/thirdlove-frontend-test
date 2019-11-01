import React from 'react';
import classnames from 'classnames';

const Button = ({ type, className, text }) => (
  <button className={classnames(type, className)} type="button">
    {text}
  </button>
);

export default Button;
