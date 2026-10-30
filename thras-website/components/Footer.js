import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { useT } from '../lib/i18n';
import { COMPANY, LEGAL_READY } from '../lib/company';

export default function Footer() {
  const t = useT().footer;
  const links = [
    ['/', t.home],
    ['/expertise', t.expertise],
    ['/about', t.about],
    ['/careers', t.careers],
    ['/news', t.news],
    ['/contact', t.contactLink],
  ];

  return (
    <footer className={styles.footer}>
      <img src="/thras-logo-ring.webp" alt="" className={styles.ring} />

      <div className={styles.story}>
        <p>{t.greek1}</p>
        <p>{t.greek2}</p>
      </div>

      <div className={styles.row}>
        <Link href="/" className={styles.logo}>
          <Image src="/thras-logo-white.png" alt="" width={26} height={37} />
          <span>Thras</span>
        </Link>
        <nav className={styles.nav} aria-label="Footer">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <div className={styles.contact}>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          {COMPANY.phone && <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a>}
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Thras. {t.rights}</span>
        {LEGAL_READY && (
          <span className={styles.legal}>
            <Link href="/privacy">{t.privacy}</Link>
            <Link href="/legal">{t.legal}</Link>
          </span>
        )}
      </div>
    </footer>
  );
}
