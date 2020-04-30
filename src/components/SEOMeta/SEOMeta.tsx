import React from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_NAME, DEFAULT_DESCRIPTION } from '@/shared/constants';

export interface SEOMetaProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  author?: string;
}

function SEOMeta({ title, description, image, canonical, author }: SEOMetaProps) {
  const targetTitle = title || APP_NAME;
  const targetDescription = description || DEFAULT_DESCRIPTION;
  return (
    <Helmet>
      <title>{targetTitle}</title>
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={targetTitle} />
      <meta name="twitter:title" content={targetTitle} />

      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="description" content={targetDescription} />
      <meta name="og:description" property="og:description" content={targetDescription} />
      <meta name="twitter:description" content={targetDescription} />

      <meta property="og:site_name" content={APP_NAME} />
      <meta name="twitter:site" content={APP_NAME} />
      <meta name="twitter:creator" content={author || APP_NAME} />

      <meta name="twitter:card" content="summary" />

      {canonical && (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      )}
      {image && <>
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
      </>}
    </Helmet>
  );
}

export default SEOMeta;
