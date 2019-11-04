import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import './button.scss';

const Buttonn = ({ text, onClick, className }) => (
  <Button className={classnames(className)} type="button" onClick={onClick}>
    {text}
  </Button>
);

Buttonn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Buttonn.defaultProps = {
  text: '',
  className: '',
  onClick: () => { },
};

export default Buttonn;
