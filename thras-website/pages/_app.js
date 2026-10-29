import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const SITE = 'https://www.thras.tech';

function MyApp({ Component, pageProps }) {
  const { asPath, locale, locales, defaultLocale } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const withLocale = (l) => SITE + (l === defaultLocale ? '' : '/' + l) + (path === '/' ? '' : path);
  const url = withLocale(locale);
  return (
    <Layout>
      <Head>
        <link rel="canonical" href={url} />
        {locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={withLocale(l)} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={withLocale(defaultLocale)} />
        <meta property="og:site_name" content="Thras" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE}/favicon-512.png`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Component key={locale} {...pageProps} />
    </Layout>
  );
}

export default MyApp;