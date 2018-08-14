import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import './Button.css';

const propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'dark']),
};

const defaultProps = {
  color: 'primary',
};

class Button extends Component {
  onClick = e => {
    if (this.props.disabled || this.props.loading) {
      e.preventDefault();
    } else {
      this.props.onClick && this.props.onClick(e);
    }
  };

  render() {
    const {
      to,
      disabled,
      loading,
      block,
      link,
      outline,
      rounded,
      color,
      className,
      ...atributes
    } = this.props;

    const Tag = to ? Link : 'button';

    const classes = cx(
      'Btn',
      block && 'Btn--block',
      rounded && 'Btn--rounded',
      outline ? `Btn--outline-${color}` : `Btn--${color}`,
      loading && `Btn--loading Btn--loading-${color}`,
      link && 'Btn--link',
      className
    );

    return (
      <Tag
        to={to}
        {...atributes}
        className={classes}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
