import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portalRoot');

class Portal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
