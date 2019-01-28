import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import ChangeLanguageSelect from '../ChangeLanguageSelect/ChangeLanguageSelect';
import Overlay from '../youtube/overlay';
import SliderGallery from './gallery';
import '../../i18n';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false,
    };
  }

  onOpenOverlay() {
    this.setState({ overlayActive: true });
  }

  onCloseOverlay() {
    this.setState({ overlayActive: false });
  }

  render() {
    const { data, t } = this.props;
    const { overlayActive } = this.state;
    return (
      <div>
        <ChangeLanguageSelect />
        <button type="button" onClick={() => this.onOpenOverlay()}>
          {t('buttonShowVideo')}
        </button>
        {overlayActive && (
          <Overlay data={data.video} onClose={() => this.onCloseOverlay()} />
        )}
        <div>
          <h1>{data.name}</h1>
          <img src={data.avatar} alt={data.name} className="author-image" />
        </div>
        <h2>{t('books')}</h2>
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
  }
}

Header.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  t: PropTypes.func.isRequired,
};

export default Header;
