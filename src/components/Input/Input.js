import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Input.css';

const propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  block: PropTypes.bool,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'input',
  type: 'text',
};

class Input extends Component {
  focus = () => {
    if (this.ref) {
      this.ref.focus();
    }
  };

  render() {
    const {
      tag: Tag,
      type,
      block,
      invalid,
      valid,
      className,
      ...attributes
    } = this.props;

    const classes = cx(
      type === 'radio' || type === 'checkbox' ? 'Input--check' : 'Input',
      block && 'Input--block',
      invalid && 'Input--error',
      valid && 'Input--success',
      className
    );

    if (Tag === 'input') {
      attributes.type = type;
    }

    if (
      attributes.children &&
      (Tag === 'input' || type === 'radio' || type === 'checkbox')
    ) {
      delete attributes.children;
    }

    return (
      <Tag
        ref={ref => {
          this.ref = ref;
        }}
        className={classes}
        {...attributes}
      />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
