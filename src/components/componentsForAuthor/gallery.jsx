import React from 'react';
import './header.css';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

class SliderGallery extends React.Component {

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/250/150/nature/1/',//Место для json инфы из "photosGallery"
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'//Место для json инфы из "photosGallery"
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',//Место для json инфы из "photosGallery"
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'//Место для json инфы из "photosGallery"
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',//Место для json инфы из "photosGallery"
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'//Место для json инфы из "photosGallery"
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',//Место для json инфы из "photosGallery"
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'//Место для json инфы из "photosGallery"
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',//Место для json инфы из "photosGallery"
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'//Место для json инфы из "photosGallery"
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

SliderGallery.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };
export default SliderGallery;