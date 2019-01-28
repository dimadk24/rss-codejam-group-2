import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import Header from './header';

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const Layout = ({ children, t }) => (
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
          defaultTitle={t('pageTitle')}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />

    <Header t={t} />

    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.instanceOf(Function).isRequired,
};

export default Layout;
