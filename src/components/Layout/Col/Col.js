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
  xsOrder: PropTypes.number,
  smOrder: PropTypes.number,
  mdOrder: PropTypes.number,
  lgOrder: PropTypes.number,
  xlOrder: PropTypes.number,
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
    xsOrder,
    smOrder,
    mdOrder,
    lgOrder,
    xlOrder,
    children,
    ...attributes
  } = props;

  // TODO: think of a better solution?
  const classes = ['col'];
  Object.keys(props).forEach(key => {
    if (
      Object.prototype.hasOwnProperty.call(props, key) &&
      /(xs|sm|md|lg|xl)/gi.test(key)
    ) {
      /[A-Z]/g.test(key)
        ? classes.push(
            `col-${key.substring(0, 2)}-${key
              .substring(2, key.length)
              .toLowerCase()}-${props[key]}`
          )
        : classes.push(`col-${key}-${props[key]}`);
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
