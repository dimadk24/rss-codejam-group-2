import React from 'react';
import Layout from '../components/layout';
import './index.css';

const IndexPage = () => (
  <Layout>
    <section className="description flex-container">
      <h2> Портал </h2>
    </section>
    <section className="author-of-day flex-container">
      <h2> Автор дня </h2>
      <div>loren ipsum</div>
    </section>
    <section className="about-us flex-container">
      <h2 className="about-us__header"> O Нас </h2>
      <div className="about-us__container flex-container">
        <div className="about-us__container-item flex-container">
          <img
            src="https://res.cloudinary.com/p-d/image/upload/v1548509888/cod-jam-culture/dmitrylenko.jpg"
            height="200"
            width="200"
            alt="Dmitry"
          />
          <h3>Dmitry Lianko</h3>
          <a href="https://github.com/DmitryLenko/">
            <img
              src="https://res.cloudinary.com/p-d/image/upload/v1548518602/cod-jam-culture/github.svg"
              width="20"
              height="20"
              alt="github"
            />
          </a>
        </div>
        <div className="about-us__container-item flex-container">
          <img
            src="https://res.cloudinary.com/p-d/image/upload/v1548509784/cod-jam-culture/DimaKrutolyanov.jpg"
            height="200"
            width="200"
            alt="Dmitry"
          />
          <h3>Dmitry Krutolyanov</h3>
          <a href="https://github.com/DimaDK24">
            <img
              src="https://res.cloudinary.com/p-d/image/upload/v1548518602/cod-jam-culture/github.svg"
              width="20"
              height="20"
              alt="github"
            />
          </a>
        </div>
        <div className="about-us__container-item flex-container">
          <img
            src="https://res.cloudinary.com/p-d/image/upload/v1548516899/cod-jam-culture/FH1h-U7BCps.jpg"
            height="200"
            width="200"
            alt="Yauheni"
          />
          <h3>Yauheni Nemkevich</h3>
          <a href="https://github.com/Nemkev">
            <img
              src="https://res.cloudinary.com/p-d/image/upload/v1548518602/cod-jam-culture/github.svg"
              width="20"
              height="20"
              alt="github"
            />
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
