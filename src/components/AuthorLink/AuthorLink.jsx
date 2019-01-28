import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './AuthorLink.css';

function AuthorLink({ name, birthplace, data }) {
  return (
    <div className="author-link">
      <Link to="/autor/" state={{ author: data }}>
        {name}.
      </Link>
      <span> Город рождения: {birthplace}</span>
    </div>
  );
}

AuthorLink.propTypes = {
  name: PropTypes.string.isRequired,
  birthplace: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default AuthorLink;
