import React from 'react';
import PropTypes from 'prop-types';

import './Row.css';

const propTypes = {
  tag: PropTypes.string,
  gutters: PropTypes.bool,
  reverse: PropTypes.bool,
  start: PropTypes.bool,
  center: PropTypes.bool,
  end: PropTypes.bool,
  top: PropTypes.bool,
  middle: PropTypes.bool,
  bottom: PropTypes.bool,
  around: PropTypes.bool,
  between: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  tag: 'div',
  gutters: true,
  reverse: false,
  start: false,
  center: false,
  end: false,
  top: false,
  middle: false,
  bottom: false,
  around: false,
  between: false,
};

const Row = props => {
  const {
    tag: Tag,
    children,
    gutters,
    reverse,
    start,
    center,
    end,
    top,
    middle,
    bottom,
    around,
    between,
    ...attributes
  } = props;

  const classes = ['row'];
  const attrs = { ...props };

  Object.keys(attrs).forEach(key => {
    if (
      Object.prototype.hasOwnProperty.call(attrs, key) &&
      attrs[key] &&
      key !== 'tag' &&
      key !== 'children'
    ) {
      classes.push(`row__${key}`);
    }
  });

  return (
    <Tag {...attributes} className={classes.join(' ').trim()}>
      {children}
    </Tag>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
