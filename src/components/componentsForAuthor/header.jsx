import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import SliderGallery from './gallery';
import '../../i18n';

const Header = ({ data, t }) => (
  <div>
    <select>
      <option>RU</option>
      <option>BE</option>
      <option>EN</option>
    </select>
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar} alt={data.name} className="author-image" />
    </div>
    <h2>{t('books')}</h2>
    <div className="author-header">
      {data.books.map(books => (
        <div key={books.id}>
          <h3 className="book-name">{books.name}</h3>
          <p className="book-data">{books.date}</p>
          <img src={books.photo} alt={books.name} className="book-image" />
          <button>{t('buttonShowVideo')}</button>
        </div>
      ))}
    </div>
    <div>
      <SliderGallery data={data} />
    </div>
  </div>
);

Header.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  t: PropTypes.func.isRequired,
};

export default Header;
