import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ data }) => (
  <iframe
    src={data}
    width="100%"
    height="500px"
    frameBorder="0"
    allowFullScreen="allowFullScreen"
    title="maps"
  />
);

Location.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Location;
