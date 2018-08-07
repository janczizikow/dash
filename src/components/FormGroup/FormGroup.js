import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './FormGroup.css';

const propTypes = {
  tag: PropTypes.string,
  inline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  tag: 'div',
};

const FormGroup = props => {
  const { tag: Tag, inline, className, ...attributes } = props;
  const classes = cx(
    'form__group',
    inline ? 'form__group--inline' : null,
    className
  );
  return <Tag className={classes} {...attributes} />;
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
