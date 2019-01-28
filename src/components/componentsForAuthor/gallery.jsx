import React from 'react';
import './header.css';
import ImageGallery from 'react-image-gallery';

class SliderGallery extends React.Component {
  constructor(props) {
    super(props);
    this.images = [];
    this.photos = this.props;
    this.photos.data.photosGallery.forEach(photo =>
      this.images.push({
        original: photo,
        thumbnail: photo,
      }),
    );
  }

  render() {
    return <ImageGallery items={this.images} />;
  }
}

export default SliderGallery;
