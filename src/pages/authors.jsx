import Fuse from 'fuse.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { authors } from '../../data/authors';
import AuthorLink from '../components/AuthorLink/AuthorLink';
import Layout from '../components/layout';
import './authors.css';

const searcher = (items, searchKeys) => {
  const options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: searchKeys,
  };
  const fuse = new Fuse(items, options);
  return searchString => fuse.search(searchString);
};

class AuthorsPage extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      searching: false,
      foundAuthors: authors,
    };
    this.searcher = null;
  }

  onInputChange(e) {
    const searchString = e.target.value;
    if (searchString !== '') {
      this.search(searchString);
    } else this.setState({ searching: false });
  }

  getAuthorsAndText({ searching, foundAuthors, allAuthors }) {
    const { t } = this.props;
    let authorsForRender;
    let authorsText;
    if (searching) {
      authorsForRender = foundAuthors;
      if (!authorsForRender.length) authorsText = t('noWriters');
      else authorsText = t('foundWriters');
    } else {
      authorsForRender = allAuthors;
      authorsText = t('ourWriters');
    }
    return { authorsForRender, authorsText };
  }

  createSearcher() {
    this.searcher = searcher(authors, ['name', 'birthplace']);
  }

  search(searchString) {
    this.setState({ searching: true });
    if (!this.searcher) this.createSearcher();
    const foundAuthors = this.searcher(searchString);
    this.setState({ foundAuthors });
  }

  render() {
    const { t } = this.props;
    const { searching, foundAuthors } = this.state;
    const { authorsForRender, authorsText } = this.getAuthorsAndText({
      searching,
      foundAuthors,
      allAuthors: authors,
    });
    return (
      <Layout t={t}>
        <section className="wrapper">
          <div className="search-wrapper">
            <label htmlFor="search-input">
              {t('writersSearch')}
              <input
                id="search-input"
                className="search-input"
                onChange={this.onInputChange}
              />
            </label>
          </div>
          <span className="text">{authorsText}</span>
          <ul className="authors-list">
            {authorsForRender.map(author => (
              <li key={author.id} className="author">
                <AuthorLink
                  birthplace={author.birthplace}
                  name={author.name}
                  data={author}
                  t={t}
                />
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }
}

AuthorsPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(AuthorsPage);
