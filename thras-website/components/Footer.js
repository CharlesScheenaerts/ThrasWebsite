import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>Thras</div>
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>COMPANY</h3>
            <Link href="/about">About Us</Link>
            <Link href="/expertise">Our Expertise</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/news">News</Link>
          </div>
          <div className={styles.linkColumn}>
            <h3>CONTACT</h3>
            <Link href="/contact">Get in Touch</Link>
            <p>contact@thras.tech</p>
            <p>+32 2 123 45 67</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Thras. All rights reserved.
      </div>
    </footer>
  );
}