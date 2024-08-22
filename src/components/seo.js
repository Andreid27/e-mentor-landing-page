import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'startup apps landing page',
  author = 'RedQ, Inc',
  meta,
  title = 'E-mentor - Admitere la medicină sau pregătire pentru biologie BAC',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `ro`,
  meta: ['Medicină', 'Admitere', 'Biologie', 'BAC', 'E-mentor', 'Pregătire', 'meditatii', 'meditatii medicina', 'meditatii biologie', 'meditatii bac', 'meditatii admitere', 'meditatii medicina bucuresti', 'meditatii biologie bucuresti', 'meditatii bac bucuresti', 'meditatii admitere bucuresti', 'meditatii medicina online', 'meditatii biologie online', 'meditatii bac online', 'meditatii admitere online', 'meditatii medicina bucuresti online', 'meditatii biologie bucuresti online', 'meditatii bac bucuresti online', 'meditatii admitere bucuresti online'],
};
