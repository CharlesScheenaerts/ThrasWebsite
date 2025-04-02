import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Thras</span>
        </Link>
        
        <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.menuItem}>HOME</Link>
          <Link href="/about" className={styles.menuItem}>ABOUT US</Link>
          <Link href="/expertise" className={styles.menuItem}>EXPERTISE</Link>
          <Link href="/careers" className={styles.menuItem}>CAREERS</Link>
          <Link href="/news" className={styles.menuItem}>NEWS</Link>
          <Link href="/contact" className={styles.menuItem}>CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}