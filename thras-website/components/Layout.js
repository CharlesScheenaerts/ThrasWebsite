import Head from 'next/head';
import Footer from './Footer';
import ScrollGauge from './ScrollGauge';
import { useEffect, useState } from 'react';
import { Header } from './Header';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollPercentage(scrollPercent > 1 ? 1 : scrollPercent < 0 ? 0 : scrollPercent);
      
      // Afficher le bouton "scroll up" quand on descend de plus de 500px
      setScrollUpVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    // Appeler une fois au chargement pour initialiser l'état
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Bouton Scroll Up - visible quand on descend */}
      <div 
        className={`${styles.scrollUp} ${scrollUpVisible ? styles.visible : ''}`} 
        onClick={scrollToTop}
      >
        <div className={styles.scrollUpButton}>
          <div className={styles.scrollUpArrow}></div>
        </div>
      </div>
    </>
  );
}
