import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { useT } from '../lib/i18n';

export default function Footer() {
  const t = useT().footer;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>Thras</div>
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>{t.company}</h3>
            <Link href="/about">{t.about}</Link>
            <Link href="/expertise">{t.expertise}</Link>
            <Link href="/careers">{t.careers}</Link>
            <Link href="/news">{t.news}</Link>
          </div>
          <div className={styles.linkColumn}>
            <h3>{t.contact}</h3>
            <Link href="/contact">{t.getInTouch}</Link>
            <p>contact@thras.tech</p>
            <p>+32 2 123 45 67</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Thras. {t.rights}
      </div>
    </footer>
  );
}