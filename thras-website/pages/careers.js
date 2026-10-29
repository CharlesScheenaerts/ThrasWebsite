import styles from '../styles/Careers.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useT } from '../lib/i18n';

const JOBS_OPEN = false;

export default function Careers() {
  const t = useT().careers;
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobMeta = [
    { id: 1, department: 'engineering' },
    { id: 2, department: 'engineering' },
    { id: 3, department: 'data' },
    { id: 4, department: 'data' },
    { id: 5, department: 'consulting' },
    { id: 6, department: 'operations' },
    { id: 7, department: 'design' },
    { id: 8, department: 'engineering' }
  ];
  const jobs = jobMeta.map((meta, i) => ({ ...meta, ...t.jobs[i], type: t.fullTime }));

  const departments = Object.keys(t.departments).map((value) => ({ value, label: t.departments[value] }));

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/thras-logo-arc1.png" alt="" className={styles.heroDecorRing1} />
        <img src="/thras-logo-arc2.png" alt="" className={styles.heroDecorRing2} />
        <div className={styles.heroContent}>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <h2>{t.introTitle}</h2>
          <p>{t.introText}</p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className={styles.jobs}>
        <div className={styles.jobsHeader}>
          <h2>{t.positionsTitle}</h2>
          {JOBS_OPEN && (
            <div className={styles.filter}>
              <label htmlFor="department">{t.filterBy}</label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept.value} value={dept.value}>{dept.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {JOBS_OPEN ? (
          <>
            <div className={styles.jobsList}>
              {filteredJobs.map(job => (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.jobMain}>
                    <h3>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobLocation}>📍 {job.location}</span>
                      <span className={styles.jobType}>{job.type}</span>
                      <span className={styles.jobDept}>{departments.find(d => d.value === job.department)?.label}</span>
                    </div>
                    <p>{job.description}</p>
                  </div>
                  <div className={styles.jobSide}>
                    <div className={styles.jobRequirements}>
                      <h4>{t.requirements}</h4>
                      <ul>
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/contact?job=${encodeURIComponent(job.title)}`} className={styles.applyButton}>
                      {t.apply}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className={styles.noJobs}>
                <p>{t.noneInDept[0]}</p>
                <p>{t.noneInDept[1]}</p>
              </div>
            )}
          </>
        ) : (
          <div className={styles.noJobs}>
            <p>{t.noneAtAll[0]}</p>
            <p>{t.noneAtAll[1]}</p>
          </div>
        )}
      </section>

      {/* Culture Section */}
      <section className={styles.culture}>
        <div className={styles.cultureContent}>
          <h2>{t.cultureTitle}</h2>
          <div className={styles.cultureGrid}>
            {t.culture.map((item) => (
              <div key={item.title} className={styles.cultureItem}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
        <Link href="/contact" className={styles.ctaButton}>{t.ctaButton}</Link>
      </section>
    </>
  );
}
