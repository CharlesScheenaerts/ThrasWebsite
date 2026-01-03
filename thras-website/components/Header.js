import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export let externalScrollUpVisible = null;

export function Header() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [scrollUpVisible, setScrollUpVisible] = useState(false);

    useEffect(() => {
        externalScrollUpVisible = setScrollUpVisible;
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        setScrollPercentage(scrollPercent > 1 ? 1 : scrollPercent < 0 ? 0 : scrollPercent);
        
        setNavbarScrolled(scrollTop > 50);
        setScrollUpVisible(scrollTop > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

      {/* Scroll Gauge */}
      <div className={styles.gaugeContainer}>
        <div className={styles.gauge} style={{ width: `${scrollPercentage * 100}%` }}></div>
      </div>

      {/* Navbar */}
      <nav className={`${styles.navbar} ${navbarScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Thras</div>
<div className={styles.menuItems}>
  <Link href="/" className={styles.menuItem}>HOME</Link>
  <Link href="/about" className={styles.menuItem}>ABOUT US</Link>
  <Link href="/expertise" className={styles.menuItem}>EXPERTISE</Link>
  <Link href="/careers" className={styles.menuItem}>CAREERS</Link>
  <Link href="/news" className={styles.menuItem}>NEWS</Link>
  <Link href="/contact" className={styles.menuItem}>CONTACT</Link>
          </div>
        </div>
      </nav>
        </>
    );
}