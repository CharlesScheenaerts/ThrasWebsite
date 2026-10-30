import Head from 'next/head';
import styles from '../styles/Legal.module.css';
import { useT } from '../lib/i18n';
import { useRouter } from 'next/router';
import { COMPANY, LEGAL_READY } from '../lib/company';

const UPDATED = '2026-10-30';

const fill = (text) =>
  text.replace('{company}', COMPANY.legalName || 'Thras').replace(/\{email\}/g, COMPANY.email);

export default function Privacy() {
  const t = useT().privacy;
  const { locale } = useRouter();
  const date = new Date(UPDATED).toLocaleDateString(locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

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
        <p className={styles.updated}>{t.updated} {date}</p>
        {t.sections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{fill(p)}</p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
