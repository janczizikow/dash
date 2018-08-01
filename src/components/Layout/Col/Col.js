import React from 'react';
import PropTypes from 'prop-types';

import './Col.css';

const propTypes = {
  tag: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
};

const defaultProps = {
  tag: 'div',
};

const Col = props => {
  const {
    tag: Tag,
    xs,
    sm,
    md,
    lg,
    xl,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
    children,
    ...attributes
  } = props;

  const classes = ['col'];

  // TODO: think of a better solution?
  // handle cases for offsets
  Object.keys(props).forEach(key => {
    if (
      Object.prototype.hasOwnProperty.call(props, key) &&
      /(xs|sm|md|lg|xl)/gi.test(key)
    ) {
      classes.push(`col-${key}-${props[key]}`);
    }
  });

  return (
    <Tag {...attributes} className={classes.join(' ').trim()}>
      {children}
    </Tag>
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
