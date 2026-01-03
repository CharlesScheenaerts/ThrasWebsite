import styles from '../styles/Contact.module.css';
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
        subject: `Job Application: ${router.query.job}`,
        service: 'careers'
      }));
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
      content: ['info@thras.be', 'careers@thras.be', 'support@thras.be'],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="48" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M8 20 L32 36 L56 20" fill="none" stroke="currentColor" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Call Us',
      content: ['+32 2 123 45 67', 'Mon - Fri: 9:00 - 18:00', 'CET Timezone'],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8 L24 16 L16 16 C12 16 8 20 8 24 L8 40 C8 44 12 48 16 48 L24 48 L24 56 L40 56 L40 48 L48 48 C52 48 56 44 56 40 L56 24 C56 20 52 16 48 16 L40 16 L40 8 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        </svg>
      )
    }
  ];

  const services = [
    { value: '', label: 'Select a service' },
    { value: 'software', label: 'Software Development' },
    { value: 'digital', label: 'Digital Transformation' },
    { value: 'cloud', label: 'Cloud Services' },
    { value: 'web', label: 'Website Creation' },
    { value: 'consulting', label: 'IT Consulting' },
    { value: 'data', label: 'Data Science' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'careers', label: 'Careers / Job Application' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Get in Touch</h1>
          <p>Let's discuss how we can help your business grow</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.infoCard}>
              <div className={styles.infoIcon}>{info.icon}</div>
              <h3>{info.title}</h3>
              {info.content.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Form */}
          <div className={styles.formWrapper}>
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            
            {submitted ? (
              <div className={styles.successMessage}>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M20 32 L28 40 L44 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll be in touch soon.</p>
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
                    <label htmlFor="service">Service Interest</label>
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
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
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
                <p>Avenue Louise 123</p>
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
