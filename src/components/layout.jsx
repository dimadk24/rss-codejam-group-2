import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import Footer from './footer';
import Header from './header';

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const Layout = ({ children }) => (
  <div>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />

    <Header home="Home" autors="Autors" />

    <main>{children}</main>

    <Footer>
      <p align="center">Sticky footer</p>
    </Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
