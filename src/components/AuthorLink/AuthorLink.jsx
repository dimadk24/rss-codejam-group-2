import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './AuthorLink.css';

function AuthorLink({ name, birthplace, data, t }) {
  return (
    <div className="author-link">
      <Link to="/author/" state={{ author: data }}>
        {name}.
      </Link>
      <span>
        {' '}
        {t('birthplace')}: {birthplace}
      </span>
    </div>
  );
}

AuthorLink.propTypes = {
  name: PropTypes.string.isRequired,
  birthplace: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  t: PropTypes.func.isRequired,
};

export default AuthorLink;
