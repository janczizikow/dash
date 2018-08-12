import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Container.css';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
};

const Container = props => {
  const { tag: Tag, fluid, className, ...attributes } = props;
  const classes = cx(fluid ? 'Container__fluid' : 'Container', className);

  return <Tag {...attributes} className={classes} />;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
