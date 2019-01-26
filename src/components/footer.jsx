import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ children, ...props }) => (
  <footer {...props}>
    <div>{children}</div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
