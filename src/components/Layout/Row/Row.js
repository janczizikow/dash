import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Row.css';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
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
};

const defaultProps = {
  tag: 'div',
  gutters: true,
};

const Row = props => {
  const {
    tag: Tag,
    className,
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

  const classes = cx(
    {
      Row: true,
      Row__gutters: gutters,
      Row__reverse: reverse,
      Row__start: start,
      Row__center: center,
      Row__end: end,
      Row__top: top,
      Row__middle: middle,
      Row__bottom: bottom,
      Row__around: around,
      Row__between: between,
    },
    className
  );

  return <Tag {...attributes} className={classes} />;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
