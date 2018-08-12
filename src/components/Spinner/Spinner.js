import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';

const propTypes = {
  light: PropTypes.bool,
};

const Spinner = props => {
  const { light, ...attributes } = props;
  const classes = light ? 'Spinner--light' : 'Spinner';
  return <div className={classes} {...attributes} />;
};

Spinner.propTypes = propTypes;

export default Spinner;
