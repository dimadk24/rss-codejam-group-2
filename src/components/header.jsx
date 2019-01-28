import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';
import ChangeLanguageSelect from './ChangeLanguageSelect/ChangeLanguageSelect';

const Header = ({ t, ...props }) => (
  <header {...props}>
    <div className="nav-header">
      <ChangeLanguageSelect />
      <Link className="nav-header__item" to="/">
        {t('menuHome')}
      </Link>
      <Link className="nav-header__item" to="/authors/">
        {t('menuAuthors')}
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Header;
