import PropTypes from 'prop-types';
import React from 'react';
import './footer.css';

const Footer = ({ children, ...props }) => (
  <footer {...props}>
    <div>{children}</div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
