import React from 'react';
import { Link } from 'gatsby';
import { authors } from '../../data/authors';
import './author-top.css';

const getRandomAuthor = () => {
  const date = new Date();
  const day = date.getUTCDate();
  let multiplier = day / 7;
  multiplier -= Math.floor(multiplier);
  const greatAuthorId = Math.floor(authors.length * multiplier);
  return authors[greatAuthorId];
};

const AuthorsTop = () => {
  const data = getRandomAuthor();
  return (
    <Link
      to="/author/"
      state={{ author: data }}
      className="author-container__title"
    >
      <div className="author-container flex-container">
        <img
          className="author-container__image"
          src={data.avatar}
          height="300"
          width="300"
          alt={data.name}
        />
        <p>{data.name}</p>
      </div>
    </Link>
  );
};

export default AuthorsTop;
