import React from 'react';
import Helmet from 'react-helmet';
import SiteHelmetComponent from './SiteHelmet.interfaces';

const SiteHelmet: SiteHelmetComponent = ({ pageTitle, title, description }) => {
  return (
    <Helmet>
      <html lang="ru" />
      <title>{`${pageTitle} · ${title}`}</title>
      <meta name="description" content={description} />

      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon-precomposed-152.png" />
      <link rel="icon" href="/img/favicon.ico" sizes="32x32" type="x-icon" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="learn" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/wp.png" />
    </Helmet>
  );
};

export default SiteHelmet;
