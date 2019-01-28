import PropTypes from 'prop-types';
import React from 'react';
import './overlay.css';

const Overlay = ({ data }) => {
  const url = data.replace('watch?v=', 'embed/');
  return (
    <div className="overlay-container flex-container">
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
};

Overlay.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Overlay;
