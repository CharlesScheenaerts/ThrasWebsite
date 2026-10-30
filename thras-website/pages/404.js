import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/NotFound.module.css';
import { useT } from '../lib/i18n';

export default function NotFound() {
  const t = useT().notFound;
  return (
    <section className={styles.wrap}>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <img src="/thras-logo-arc1.webp" alt="" className={styles.ring} />
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <h1>{t.title}</h1>
        <p>{t.text}</p>
        <Link href="/" className={styles.button}>{t.button}</Link>
      </div>
    </section>
  );
}
