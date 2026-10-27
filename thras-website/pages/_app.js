import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const SITE = 'https://www.thras.tech';

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const url = SITE + (asPath.split(/[?#]/)[0] === '/' ? '' : asPath.split(/[?#]/)[0]);
  return (
    <Layout>
      <Head>
        <link rel="canonical" href={url} />
        <meta property="og:site_name" content="Thras" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE}/favicon-512.png`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;