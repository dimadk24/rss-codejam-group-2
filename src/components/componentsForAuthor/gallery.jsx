import React from 'react';
import './header.css';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/250/150/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

MyComponent.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };
export default MyComponent;