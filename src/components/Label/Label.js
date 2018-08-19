import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Label.css';

const propTypes = {
  htmlFor: PropTypes.string.isRequired,
  block: PropTypes.bool,
  bold: PropTypes.bool,
  hidden: PropTypes.bool,
  invalid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  check: PropTypes.bool,
};

/* https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md */
/* eslint-disable jsx-a11y/label-has-for */

const Label = props => {
  const {
    htmlFor,
    block,
    hidden,
    bold,
    invalid,
    className,
    disabled,
    check,
    ...attributes
  } = props;
  const classes = cx(
    'Label',
    block && 'Label--block',
    hidden && 'Label--hidden',
    bold && 'Label--bold',
    invalid && 'Label--error',
    disabled && 'Label--disabled',
    check && 'Label--check',
    className
  );
  return (
    <label
      htmlFor={htmlFor}
      className={classes}
      hidden={hidden}
      {...attributes}
    />
  );
};

Label.propTypes = propTypes;

export default Label;
