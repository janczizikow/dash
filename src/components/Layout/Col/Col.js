import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Col.css';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
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
    className,
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
    ...attributes
  } = props;

  // TODO: think of a better solution?
  const colClasses = ['Col'];

  Object.keys(props).forEach(key => {
    if (
      Object.prototype.hasOwnProperty.call(props, key) &&
      /(xs|sm|md|lg|xl)/gi.test(key)
    ) {
      /[A-Z]/g.test(key)
        ? colClasses.push(
            `Col-${key.substring(0, 2)}-${key
              .substring(2, key.length)
              .toLowerCase()}-${props[key]}`
          )
        : colClasses.push(`Col-${key}-${props[key]}`);
    }
  });

  const classes = cx(colClasses, className);

  return <Tag {...attributes} className={classes} />;
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
