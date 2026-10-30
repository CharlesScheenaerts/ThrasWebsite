import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useT } from '../lib/i18n';
import Link from 'next/link';
import { COMPANY, LEGAL_READY } from '../lib/company';

export default function Contact() {
  const t = useT().contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const job = params.get('job');
    if (job) {
      setFormData(prev => ({ ...prev, subject: `${t.jobSubject} ${job}` }));
    }
    const plan = String(params.get('plan') || '').toLowerCase();
    if (['boost', 'sidekick', 'squad'].includes(plan)) {
      setFormData(prev => ({ ...prev, service: plan }));
    }
  }, [t.jobSubject]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      title: t.emailTitle,
      href: 'mailto:contact@thras.tech',
      content: ['contact@thras.tech'],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="48" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M8 20 L32 36 L56 20" fill="none" stroke="currentColor" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: t.callTitle,
      href: 'tel:+3221234567',
      content: ['+32 2 123 45 67'],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8 L24 16 L16 16 C12 16 8 20 8 24 L8 40 C8 44 12 48 16 48 L24 48 L24 56 L40 56 L40 48 L48 48 C52 48 56 44 56 40 L56 24 C56 20 52 16 48 16 L40 16 L40 8 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        </svg>
      )
    }
  ];

  const services = [
    { value: '', label: t.planOptions[0] },
    { value: 'boost', label: t.planOptions[1] },
    { value: 'sidekick', label: t.planOptions[2] },
    { value: 'squad', label: t.planOptions[3] }
  ];

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDescription} />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/thras-logo-arc1.webp" alt="" className={styles.heroDecorRing1} />
        <img src="/thras-logo-arc2.webp" alt="" className={styles.heroDecorRing2} />
        <div className={styles.heroContent}>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          {contactInfo.map((info, index) => (
            <a key={index} href={info.href} className={styles.infoCard}>
              <div className={styles.infoIcon}>{info.icon}</div>
              <h3>{info.title}</h3>
              {info.content.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </a>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Form */}
          <div className={styles.formWrapper} id="form">
            <h2>{t.formTitle}</h2>
            <p>{t.formSub}</p>
            
            {submitted ? (
              <div className={styles.successMessage}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M20 32 L28 40 L44 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>{t.thanksTitle}</h3>
                <p>{t.thanksText}</p>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t.namePh}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">{t.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.emailPh}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">{t.company}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.companyPh}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">{t.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePh}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="service">{t.plan}</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {services.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">{t.subject}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.subjectPh}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">{t.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder={t.messagePh}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  {t.submit}
                </button>
                <p className={styles.privacyNote}>
                  {t.privacyNote}{' '}
                  {LEGAL_READY && <Link href="/privacy">{t.privacyLink}</Link>}
                </p>
              </form>
            )}
          </div>

          {/* Map Placeholder */}
          <div className={styles.mapWrapper}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8 C20 8 12 18 12 28 C12 44 32 56 32 56 C32 56 52 44 52 28 C52 18 44 8 32 8 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="32" cy="28" r="6" fill="currentColor"/>
                </svg>
                <h3>{t.mapTitle}</h3>
                <p>{t.mapText}</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                  {t.mapLink}
                </a>
              </div>
            </div>
            
            <div className={styles.quickInfo}>
              <h3>{t.quickTitle}</h3>
              <p>{t.quickText}</p>
              
              {COMPANY.bookingUrl && (
                <>
                <h3>{t.callTitle2}</h3>
                <p>{t.callText}</p>
                <a href={COMPANY.bookingUrl} className={styles.scheduleLink}>{t.bookLink}</a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
