import Head from 'next/head';
import Footer from './Footer';
import ScrollGauge from './ScrollGauge';
import { useEffect, useState } from 'react';
import { Header } from '@components/Header';

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
        <meta name="description" content="IT Services Consulting" />
      </Head>
      <Header />
      <ScrollGauge percentage={scrollPercentage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}