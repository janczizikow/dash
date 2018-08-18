import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.any,
};

class Portal extends Component {
  defaultContainer = null;

  componentDidMount() {
    this.props.container
      ? document.body.appendChild(this.props.container)
      : document.body.appendChild(this.defaultContainer);
  }

  componentWillUnmount() {
    this.props.container
      ? document.body.removeChild(this.props.container)
      : document.body.removeChild(this.defaultContainer);
  }

  render() {
    const { children, container } = this.props;

    if (!container && !this.defaultContainer) {
      this.defaultContainer = document.createElement('div');
    }

    return ReactDOM.createPortal(children, container || this.defaultContainer);
  }
}

Portal.propTypes = propTypes;

export default Portal;
