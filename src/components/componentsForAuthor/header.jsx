import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import SliderGallery from './gallery';

const Header = ({ data }) => (
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
    <h2>Книги</h2>
    <div className="author-header">
      {data.books.map(books => (
        <div key={books.id}>
          <h3 className="book-name">{books.name}</h3>
          <p className="book-data">{books.date}</p>
          <img src={books.photo} alt={books.name} className="book-image" />
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
};

export default Header;
