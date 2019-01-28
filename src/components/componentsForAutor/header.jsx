import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ data }) => (
  <div>
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar} alt={data.name} className="autor-image" />
    </div>
    <h2>Книги</h2>
    <div className="autor-header">
      {data.books.map((books, index) => (
        <div key={index} className="autor-header__title">
          <h3 className="book-name">{books.name}</h3>
          <p className="book-data">{books.date}</p>
          <img src={books.photo} alt={books.name} className="book-image" />
        </div>
      ))}
    </div>
  </div>
);

Header.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
