import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <div>
      <h3>Page not found</h3>
      <p>The requested page is unavailable.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
