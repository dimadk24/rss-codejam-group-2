import React from 'react';
import { authors } from '../../authors.json';
import './autor-top.css';

const getRandomAutor = () => {
  const date = new Date();
  const day = date.getUTCDate();
  let multiplier = day / 7;
  multiplier = multiplier - Math.floor (multiplier);
  const greatAuthorId = Math.floor(authors.length * multiplier)
  return authors[greatAuthorId];
};

const AutorTop = () => {
  const data = getRandomAutor();;
  console.log(data);
  return (
    <div className="autor-container flex-container">
      <img className="autor-container__image" src= {data.avatar} 
        height="300"
        width="300"
        alt={data.firstName}
      />
      <p className="autor-container__title"> 
        {data.firstName} {data.secondName}
      </p>
    </div>
  );
};

export default AutorTop;
