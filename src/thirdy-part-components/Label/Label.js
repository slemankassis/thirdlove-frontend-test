import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Label = ({ text, className }) => <div className={classnames('label', className)}>{text}</div>;

Label.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  text: '',
  className: '',
};

export default Label;
