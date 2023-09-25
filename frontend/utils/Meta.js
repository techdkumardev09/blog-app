// components/Meta.js

import Head from 'next/head';

const Meta = ({ title, description, canonical }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};

export default Meta;