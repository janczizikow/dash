import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Overlay.css';

const propTypes = {
  show: PropTypes.bool,
  light: PropTypes.bool,
  className: PropTypes.string,
};

const Overlay = props => {
  const { show, light, className, ...attributes } = props;

  const classes = cx('Overlay', light && 'Overlay--light', className);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={300}
      classNames="Overlay--fade"
    >
      <div className={classes} {...attributes} />
    </CSSTransition>
  );
};

Overlay.propTypes = propTypes;

export default Overlay;
