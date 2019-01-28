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
    <div className="autor-header">
      {data.books.map((books, index) => (
        <div key={index} className="autor-header__title flex-container">
          <h3>{books.name}</h3>
          <p>{books.date}</p>
          <img src={books.photo} alt={books.name} height="20%" width="20%" />
        </div>
      ))}
    </div>
  </div>
);

Header.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
