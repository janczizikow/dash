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
      row: true,
      row__gutters: gutters,
      row__reverse: reverse,
      row__start: start,
      row__center: center,
      row__end: end,
      row__top: top,
      row__middle: middle,
      row__bottom: bottom,
      row__around: around,
      row__between: between,
    },
    className
  );

  return <Tag {...attributes} className={classes} />;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
