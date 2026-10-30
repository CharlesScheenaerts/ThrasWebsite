import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/Layout';

const SITE = 'https://www.thras.tech';
const OG_LOCALES = { en: 'en_US', fr: 'fr_BE', nl: 'nl_BE' };

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
        <meta property="og:image" content={`${SITE}/og-${locale}.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={OG_LOCALES[locale] || 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}/og-${locale}.jpg`} />
      </Head>
      <Component key={locale} {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;