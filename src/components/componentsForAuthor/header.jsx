import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ data }) => (
  <div>
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar} alt={data.name} height="20%" width="20%" />
    </div>
    <h2>Книги</h2>
    <div className="author-header">
      {data.books.map(book => (
        <div key={book.id} className="author-header__title flex-container">
          <h3>{book.name}</h3>
          <p>{book.date}</p>
          <img src={book.photo} alt={book.name} height="20%" width="20%" />
        </div>
      ))}
    </div>
  </div>
);

Header.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
