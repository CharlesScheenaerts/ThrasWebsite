import Head from 'next/head';
import styles from '../styles/Legal.module.css';
import { useT } from '../lib/i18n';
import { useRouter } from 'next/router';
import { COMPANY, LEGAL_READY } from '../lib/company';

const FIELDS = ['legalName', 'legalForm', 'address', 'vat', 'email', 'phone', 'publisher'];

export default function Legal() {
  const t = useT().legal;

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        {!LEGAL_READY && <meta name="robots" content="noindex" />}
      </Head>
      <section className={styles.hero}>
        <h1>{t.title}</h1>
      </section>
      <section className={styles.content}>
        <h2>{t.identityTitle}</h2>
        <dl className={styles.identity}>
          {FIELDS.filter((field) => COMPANY[field]).map((field) => (
            <div key={field} style={{ display: 'contents' }}>
              <dt>{t.labels[field]}</dt>
              <dd>{COMPANY[field]}</dd>
            </div>
          ))}
        </dl>
        {t.sections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
