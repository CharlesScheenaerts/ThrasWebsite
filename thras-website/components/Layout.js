import Head from 'next/head';
import Footer from './Footer';
import ScrollGauge from './ScrollGauge';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollPercentage(scrollPercent > 1 ? 1 : scrollPercent < 0 ? 0 : scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Thras - IT Services Consulting</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" />
        <meta name="description" content="IT Services Consulting" />
      </Head>
      <ScrollGauge percentage={scrollPercentage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}