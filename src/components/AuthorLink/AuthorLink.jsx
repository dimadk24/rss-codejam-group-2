import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './AuthorLink.css';

function AuthorLink({ name, birthplace }) {
  return (
    <div className="author-link">
      <Link to="/author">{name}.</Link>
      <span> Город рождения: {birthplace}</span>
    </div>
  );
}

AuthorLink.propTypes = {
  name: PropTypes.string.isRequired,
  birthplace: PropTypes.string.isRequired,
};

export default AuthorLink;
