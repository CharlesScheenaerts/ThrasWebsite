import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.helpSection}>
        <h2 className={styles.helpTitle}>HOW CAN WE HELP YOU</h2>
        <Link href="/contact" className={styles.contactButton}>
          GET IN TOUCH WITH US
        </Link>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>Thras</div>
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>COMPANY</h3>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/news">News</Link>
          </div>
          <div className={styles.linkColumn}>
            <h3>SERVICES</h3>
            <Link href="/expertise">Our Expertise</Link>
            <Link href="/expertise/digital-transformation">Digital Transformation</Link>
            <Link href="/expertise/cloud-services">Cloud Services</Link>
          </div>
          <div className={styles.linkColumn}>
            <h3>CONTACT</h3>
            <Link href="/contact">Get in Touch</Link>
            <p>info@thras.com</p>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Thras. All rights reserved.
      </div>
    </footer>
  );
}