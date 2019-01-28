import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';
import i18n from '../i18n';

const onSelect = e => {
  const lang = e.target.value;
  i18n.changeLanguage(lang);
};

const Header = ({ t, ...props }) => (
  <header {...props}>
    <div className="nav-header">
      <select
        style={{ border: 'none', background: 'transparent', outline: 'none' }}
        onChange={onSelect}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="by">BE</option>
      </select>
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
