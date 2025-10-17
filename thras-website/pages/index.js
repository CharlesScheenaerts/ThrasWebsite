import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollPercentage(scrollPercent > 1 ? 1 : scrollPercent < 0 ? 0 : scrollPercent);
      
      setNavbarScrolled(scrollTop > 50);
      setScrollUpVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (selector) => {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Thras - IT Services Consulting</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" />
        <meta name="description" content="IT Services Consulting" />
      </Head>

      {/* Scroll Gauge */}
      <div className={styles.gaugeContainer}>
        <div className={styles.gauge} style={{ width: `${scrollPercentage * 100}%` }}></div>
      </div>

      {/* Navbar */}
      <nav className={`${styles.navbar} ${navbarScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Thras</div>
          <div className={styles.menuItems}>
            <a href="#" className={styles.menuItem}>HOME</a>
            <a href="#" className={styles.menuItem}>ABOUT US</a>
            <a href="#" className={styles.menuItem}>EXPERTISE</a>
            <a href="#" className={styles.menuItem}>CAREERS</a>
            <a href="#" className={styles.menuItem}>NEWS</a>
            <a href="#" className={styles.menuItem}>CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>IT Solutions For Your Business</h1>
          <p>Empowering businesses through innovative technology solutions</p>
          <div className={styles.heroCta}>
            <a href="#" className={styles.primaryButton}>Explore our services</a>
            <a href="#" className={styles.primaryButton}>Contact us</a>
          </div>
        </div>
        <div className={styles.scrollDown} onClick={() => scrollToSection('.services')}>
          <div className={styles.scrollDownButton}>
            <div className={styles.scrollDownArrow}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`services ${styles.services}`}>
        <div className={styles.sectionHeading}>
          <h2>OUR EXPERTISE</h2>
          <p>Comprehensive IT solutions tailored to your needs</p>
        </div>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#2D1054', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#4C1D95', stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M20 16 L12 32 L20 48" stroke="url(#purpleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M44 16 L52 32 L44 48" stroke="url(#purpleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="36" y1="20" x2="28" y2="44" stroke="url(#purpleGradient)" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="32" cy="32" r="2" fill="#2D1054"/>
            </svg>
            <h3>Software Development</h3>
            <p>Custom software solutions to address your unique challenges</p>
          </div>

          <div className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="20" fill="none" stroke="url(#purpleGradient)" strokeWidth="4"/>
              <circle cx="32" cy="32" r="4" fill="#2D1054"/>
              <path d="M32 12 L32 8 L38 14 L32 20 L32 16" fill="#2D1054"/>
              <path d="M52 32 L56 32 L50 38 L44 32 L48 32" fill="#2D1054"/>
              <path d="M32 52 L32 56 L26 50 L32 44 L32 48" fill="#2D1054"/>
              <path d="M12 32 L8 32 L14 26 L20 32 L16 32" fill="#2D1054"/>
            </svg>
            <h3>Digital Transformation</h3>
            <p>Modernize your business with cutting-edge digital solutions</p>
          </div>

          <div className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="14" width="32" height="22" rx="2" fill="none" stroke="url(#purpleGradient)" strokeWidth="3.5"/>
              <line x1="4" y1="20" x2="36" y2="20" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="10" cy="17" r="1.5" fill="#2D1054"/>
              <circle cx="15" cy="17" r="1.5" fill="#2D1054"/>
              <circle cx="20" cy="17" r="1.5" fill="#2D1054"/>
              <path d="M16 36 L20 40 L24 36" stroke="url(#purpleGradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="30" y="24" width="18" height="26" rx="1.5" fill="none" stroke="url(#purpleGradient)" strokeWidth="3.5"/>
              <circle cx="39" cy="47" r="1.5" fill="#2D1054"/>
              <line x1="34" y1="29" x2="44" y2="29" stroke="url(#purpleGradient)" strokeWidth="2"/>
              <rect x="44" y="32" width="14" height="20" rx="1.5" fill="none" stroke="url(#purpleGradient)" strokeWidth="3.5"/>
              <circle cx="51" cy="49" r="1.2" fill="#2D1054"/>
              <line x1="48" y1="36" x2="54" y2="36" stroke="url(#purpleGradient)" strokeWidth="1.5"/>
            </svg>
            <h3>Website Creation</h3>
            <p>Build modern, responsive websites that drive results</p>
          </div>

          <div className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="20" fill="none" stroke="url(#purpleGradient)" strokeWidth="4"/>
              <circle cx="32" cy="32" r="10" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="32" cy="32" r="4" fill="#2D1054"/>
              <path d="M32 8 L32 12" stroke="url(#purpleGradient)" strokeWidth="3" strokeLinecap="round"/>
              <path d="M32 52 L32 56" stroke="url(#purpleGradient)" strokeWidth="3" strokeLinecap="round"/>
              <path d="M8 32 L12 32" stroke="url(#purpleGradient)" strokeWidth="3" strokeLinecap="round"/>
              <path d="M52 32 L56 32" stroke="url(#purpleGradient)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="44" cy="20" r="2" fill="#2D1054"/>
              <circle cx="20" cy="44" r="2" fill="#2D1054"/>
              <circle cx="20" cy="20" r="2" fill="#2D1054"/>
              <circle cx="44" cy="44" r="2" fill="#2D1054"/>
            </svg>
            <h3>IT Consulting</h3>
            <p>Strategic technology advice to drive business growth</p>
          </div>

          <div className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 14 L50 24 L50 42 L32 52 L14 42 L14 24 Z" fill="none" stroke="url(#purpleGradient)" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M32 14 L50 24 L32 34 L14 24 Z" fill="none" stroke="url(#purpleGradient)" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M32 34 L32 52 L50 42 L50 24" fill="none" stroke="url(#purpleGradient)" strokeWidth="4" strokeLinejoin="round"/>
              <circle cx="32" cy="14" r="2.5" fill="#2D1054"/>
              <circle cx="50" cy="24" r="2.5" fill="#2D1054"/>
              <circle cx="14" cy="24" r="2.5" fill="#2D1054"/>
              <circle cx="32" cy="34" r="2.5" fill="#2D1054"/>
              <circle cx="50" cy="42" r="2.5" fill="#2D1054"/>
              <circle cx="32" cy="52" r="2.5" fill="#2D1054"/>
              <circle cx="14" cy="42" r="2.5" fill="#2D1054"/>
            </svg>
            <h3>Data Science</h3>
            <p>Transform your data into actionable insights and intelligence</p>
          </div>

          <div className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 16 Q28 12 34 16 Q38 20 38 28 Q38 34 34 38 L34 44 Q34 48 30 50 L24 50 Q20 48 20 44 L20 38 Q16 34 16 28 Q16 20 20 16" fill="none" stroke="url(#purpleGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="26" cy="24" r="2.5" fill="#2D1054"/>
              <circle cx="32" cy="26" r="2.5" fill="#2D1054"/>
              <circle cx="28" cy="30" r="2.5" fill="#2D1054"/>
              <circle cx="24" cy="34" r="2.5" fill="#2D1054"/>
              <circle cx="30" cy="34" r="2.5" fill="#2D1054"/>
              <line x1="26" y1="24" x2="32" y2="26" stroke="url(#purpleGradient)" strokeWidth="2"/>
              <line x1="32" y1="26" x2="28" y2="30" stroke="url(#purpleGradient)" strokeWidth="2"/>
              <line x1="28" y1="30" x2="24" y2="34" stroke="url(#purpleGradient)" strokeWidth="2"/>
              <line x1="28" y1="30" x2="30" y2="34" stroke="url(#purpleGradient)" strokeWidth="2"/>
              <line x1="26" y1="24" x2="28" y2="30" stroke="url(#purpleGradient)" strokeWidth="2"/>
            </svg>
            <h3>Machine Learning</h3>
            <p>Implement intelligent systems that learn and improve over time</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2>ABOUT THRAS</h2>
            <p>Based in Brussels, at the heart of Europe, we are a team of dedicated professionals committed to delivering exceptional IT services. With years of industry experience, we understand the challenges businesses face in the digital landscape and provide innovative solutions to overcome them.</p>
            <a href="#" className={styles.textLink}>Learn more about us</a>
          </div>
          <div className={styles.aboutImage}></div>
        </div>
      </section>

      {/* Help Section */}
      <section className={styles.helpSection}>
        <h2 className={styles.helpTitle}>HOW CAN WE HELP YOU</h2>
        <a href="#" className={styles.contactButton}>Get in touch with us</a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerDescription}>
          Le mot grec θράσος (thrasos) signifie courage, audace ou témérité, selon le contexte. 
          Dans la mythologie grecque, Thrasos est aussi la personnification de l\'insolence et de la témérité excessive.
        </p>
      </footer>

      {/* Scroll to Top Button */}
      <div className={`${styles.scrollUp} ${scrollUpVisible ? styles.visible : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className={styles.scrollUpButton}>
          <div className={styles.scrollUpArrow}></div>
        </div>
      </div>
    </>
  );
}