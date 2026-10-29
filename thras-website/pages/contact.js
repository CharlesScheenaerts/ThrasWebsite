import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();
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
    if (router.query.job) {
      setFormData(prev => ({
        ...prev,
        subject: `Job Application: ${router.query.job}`
      }));
    }
    const plan = String(router.query.plan || '').toLowerCase();
    if (['boost', 'sidekick', 'squad'].includes(plan)) {
      setFormData(prev => ({ ...prev, service: plan }));
    }
  }, [router.query]);

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
      title: 'Email Us',
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
      title: 'Call Us',
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
    { value: '', label: 'Not sure yet' },
    { value: 'boost', label: 'Boost: a few tasks' },
    { value: 'sidekick', label: 'Sidekick: your key workflows' },
    { value: 'squad', label: 'Squad: all your workflows' }
  ];

  return (
    <>
      <Head>
        <title>Contact Thras | Let&apos;s Talk About Your Time</title>
        <meta name="description" content="Tell us which repetitive work eats your hours. Thras builds the AI, Automation or Software that takes it off your plate. We reply within 24 hours." />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/thras-logo-arc1.png" alt="" className={styles.heroDecorRing1} />
        <img src="/thras-logo-arc2.png" alt="" className={styles.heroDecorRing2} />
        <div className={styles.heroContent}>
          <h1>Get in Touch</h1>
          <p>Let&apos;s discuss how we can help your business grow</p>
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
            <h2>Let&apos;s Talk About Your Time</h2>
            <p>Tell us what weighs on your team and pick the plan that feels closest. We come back to you within 24 hours.</p>
            
            {submitted ? (
              <div className={styles.successMessage}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M20 32 L28 40 L44 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Thank You!</h3>
                <p>We have received your request and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+32 123 456 789"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="service">Plan</label>
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
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is it about?"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="What would you like to take off your plate?"
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Let&apos;s talk
                </button>
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
                <h3>Brussels, Belgium</h3>
                <p>New offices coming soon</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                  Open in Google Maps →
                </a>
              </div>
            </div>
            
            <div className={styles.quickInfo}>
              <h3>Quick Response</h3>
              <p>Our team typically responds within 24 hours during business days.</p>
              
              <h3>Schedule a Call</h3>
              <p>Prefer to talk? Book a 30-minute discovery call with our team.</p>
              <a href="#" className={styles.scheduleLink}>Book a Meeting</a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
