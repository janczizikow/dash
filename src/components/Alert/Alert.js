import React from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import cx from 'classnames';
import { MdClose } from 'react-icons/md';

import './Alert.css';

const propTypes = {
  tag: PropTypes.string,
  show: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error']),
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]),
};

const defaultProps = {
  tag: 'div',
  timeout: 150,
  color: 'primary',
};

const Alert = props => {
  const {
    tag: Tag,
    show,
    color,
    timeout,
    onClick,
    className,
    children,
    ...attributes
  } = props;

  const classes = cx(
    'Alert',
    onClick && 'Alert--dismiss',
    color && `Alert--${color}`,
    className
  );

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      timeout={timeout}
      classNames="Alert-fade"
      in={show}
    >
      <Tag className={classes} {...attributes}>
        {children}
        {onClick && (
          <button
            type="button"
            className={`Alert__toggle Alert__toggle-${color}`}
            onClick={onClick}
          >
            <MdClose size={24} />
          </button>
        )}
      </Tag>
    </CSSTransition>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
