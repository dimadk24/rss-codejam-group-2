import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './overlay.css';

class Overlay extends Component {
  componentDidMount() {
    document.body.classList.add('overlay-active');
  }

  componentWillUnmount() {
    document.body.classList.remove('overlay-active');
  }

  render() {
    const { data, onClose } = this.props;
    const url = data.replace('watch?v=', 'embed/');
    return (
      <div className="overlay-container flex-container">
        <button type="button" onClick={onClose}>
          X
        </button>
        <iframe
          type="text/html"
          allowFullScreen="allowFullScreen"
          src={url}
          width="60%"
          height="60%"
          title="myFrame"
        />
      </div>
    );
  }
}

Overlay.propTypes = {
  data: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Overlay;
