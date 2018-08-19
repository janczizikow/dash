import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Badge.css';

const propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'dark',
    'grey',
  ]),
  className: PropTypes.string,
};

const defaultProps = {
  color: 'primary',
};

const Badge = props => {
  const { color, className, ...attributes } = props;

  const classes = cx('Badge', color && `Badge--${color}`, className);

  return <span className={classes} {...attributes} />;
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
