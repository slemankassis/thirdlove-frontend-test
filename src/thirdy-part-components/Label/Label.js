import React from 'react';
import classnames from 'classnames';

const Label = ({ text, className }) => <div className={classnames('label', className)}>{text}</div>;

export default Label;
