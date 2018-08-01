import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const propTypes = {
  tag: PropTypes.string,
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  tag: 'div',
  fluid: false,
};

const Container = props => {
  const { tag: Tag, fluid, children, ...attributes } = props;
  const classes = fluid ? 'container__fluid' : 'container';

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
