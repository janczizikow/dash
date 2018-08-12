import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './InputMessage.css';

const propTypes = {
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  className: PropTypes.string,
};

const InputMessage = props => {
  const { valid, invalid, className, ...attributes } = props;
  const classes = cx(
    'InputMessage',
    valid && 'InputMessage__valid',
    invalid && 'InputMessage__invalid',
    className
  );

  return <div className={classes} {...attributes} />;
};

InputMessage.propTypes = propTypes;

export default InputMessage;
