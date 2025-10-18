import styles from '../styles/Home.module.css';
import { externalScrollUpVisible } from '../components/Header';
import { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
    // Observer pour les animations au scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, observerOptions);
    
    // Animation des cartes de services
    const serviceCards = document.querySelectorAll(`.${styles.serviceCard}`);
    serviceCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
      observer.observe(card);
    });
    
    // Animation About section
    const aboutContainer = document.querySelector(`.${styles.aboutContainer}`);
    if (aboutContainer) {
      observer.observe(aboutContainer);
    }
  }, []);

  const scrollToSection = (selector) => {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>IT Solutions<br/>For Your Business</h1>
          <p>Empowering businesses through innovative technology</p>
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
  <rect x="10" y="16" width="44" height="36" rx="2" fill="none" stroke="url(#purpleGradient)" strokeWidth="4"/>
  <circle cx="17" cy="23" r="1.8" fill="#2D1054"/>
  <circle cx="24" cy="23" r="1.8" fill="#2D1054"/>
  <circle cx="31" cy="23" r="1.8" fill="#2D1054"/>
  <line x1="10" y1="30" x2="54" y2="30" stroke="url(#purpleGradient)" strokeWidth="2"/>
  <line x1="18" y1="38" x2="46" y2="38" stroke="url(#purpleGradient)" strokeWidth="2" strokeLinecap="round"/>
  <line x1="18" y1="44" x2="38" y2="44" stroke="url(#purpleGradient)" strokeWidth="2" strokeLinecap="round"/>
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
  {/* Réseau neural avec 3 couches */}
  {/* Couche entrée (gauche) */}
  <circle cx="16" cy="20" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="16" cy="32" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="16" cy="44" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  
  {/* Couche cachée (milieu) */}
  <circle cx="32" cy="16" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="32" cy="28" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="32" cy="40" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="32" cy="52" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  
  {/* Couche sortie (droite) */}
  <circle cx="48" cy="24" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="48" cy="40" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  
  {/* Connexions */}
  <line x1="20" y1="20" x2="28" y2="16" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="20" y1="20" x2="28" y2="28" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="20" y1="32" x2="28" y2="28" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="20" y1="32" x2="28" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="20" y1="44" x2="28" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="20" y1="44" x2="28" y2="52" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  
  <line x1="36" y1="16" x2="44" y2="24" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="36" y1="28" x2="44" y2="24" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="36" y1="28" x2="44" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="36" y1="40" x2="44" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  <line x1="36" y1="52" x2="44" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.5"/>
  
  {/* Points centraux remplis */}
  <circle cx="16" cy="20" r="2" fill="#2D1054"/>
  <circle cx="16" cy="32" r="2" fill="#2D1054"/>
  <circle cx="16" cy="44" r="2" fill="#2D1054"/>
  <circle cx="32" cy="28" r="2.5" fill="#2D1054"/>
  <circle cx="48" cy="24" r="2" fill="#2D1054"/>
  <circle cx="48" cy="40" r="2" fill="#2D1054"/>
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
    The Greek word <strong>θράσος</strong> (thrasos) means courage, boldness, or recklessness.<br/>
    In Greek mythology, Thrasos is also the personification of insolence and excessive daring.
  </p>
</footer>

      {/* Scroll to Top Button */}
      <div className={`${styles.scrollUp} ${externalScrollUpVisible ? styles.visible : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className={styles.scrollUpButton}>
          <div className={styles.scrollUpArrow}></div>
        </div>
      </div>
    </>
  );
}