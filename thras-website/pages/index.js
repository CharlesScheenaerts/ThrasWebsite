import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const servicesRef = useRef(null);
  const helpButtonRef = useRef(null);

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

    // Animation About section
    const aboutContainer = document.querySelector(`.${styles.aboutContainer}`);
    if (aboutContainer) {
      observer.observe(aboutContainer);
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero entrance: words rise into place, then subtitle and buttons follow
      const words = gsap.utils.toArray(`.${styles.heroWord}`);
      const subtitle = document.querySelector(`.${styles.heroContent} p`);
      const ctaLinks = gsap.utils.toArray(`.${styles.heroCta} a`);

      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(words,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.8, ease: 'expo.out', stagger: 0.06 }
      )
        .fromTo(subtitle,
          { opacity: 0, y: 16 },
          { opacity: 0.9, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(ctaLinks,
          { opacity: 0, y: 16, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.1 },
          '-=0.3'
        );

      // Subtle mouse parallax on the two floating rings
      const quickX1 = gsap.quickTo(ring1Ref.current, 'x', { duration: 0.8, ease: 'power3.out' });
      const quickY1 = gsap.quickTo(ring1Ref.current, 'y', { duration: 0.8, ease: 'power3.out' });
      const quickX2 = gsap.quickTo(ring2Ref.current, 'x', { duration: 1.1, ease: 'power3.out' });
      const quickY2 = gsap.quickTo(ring2Ref.current, 'y', { duration: 1.1, ease: 'power3.out' });

      const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        quickX1(relX * 30);
        quickY1(relY * 30);
        quickX2(relX * -22);
        quickY2(relY * -22);
      };

      heroRef.current?.addEventListener('mousemove', handleMouseMove);
      return () => heroRef.current?.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(`.${styles.serviceCard}`);

      // Stagger reveal as the grid scrolls into view
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%'
          }
        }
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const btn = helpButtonRef.current;
    if (!btn) return;

    const quickX = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power3.out' });
    const quickY = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power3.out' });

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      quickX(relX * 0.35);
      quickY(relY * 0.35);
    };
    const handleLeave = () => {
      quickX(0);
      quickY(0);
    };

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('mouseleave', handleLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const scrollToSection = (selector) => {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Thras | IT Services Consulting &amp; AI Solutions</title>
        <meta name="description" content="Software Development · Digital Transformation · Website Creation · IT Consulting · Data Science · AI Solutions" />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div ref={ring1Ref} className={styles.heroLogoWrap}>
          <img src="/thras-logo-arc1.png" alt="" className={`${styles.heroLogoBackground} ${styles.heroLogoArc1}`} />
        </div>
        <div ref={ring2Ref} className={styles.heroLogoWrap}>
          <img src="/thras-logo-arc2.png" alt="" className={`${styles.heroLogoBackground} ${styles.heroLogoArc2}`} />
        </div>
        <div className={styles.heroContent}>
          <h1>
            <span className={styles.heroWordWrap}><span className={styles.heroWord}>IT</span></span>{' '}
            <span className={styles.heroWordWrap}><span className={styles.heroWord}>Solutions</span></span>
            <br/>
            <span className={styles.heroWordWrap}><span className={styles.heroWord}>For</span></span>{' '}
            <span className={styles.heroWordWrap}><span className={styles.heroWord}>Your</span></span>{' '}
            <span className={styles.heroWordWrap}><span className={styles.heroWord}>Business</span></span>
          </h1>
          <p>Empowering businesses through innovative technology</p>
          <div className={styles.heroCta}>
            <Link href="/expertise" className={styles.primaryButton}>Explore our services</Link>
            <Link href="/contact" className={styles.primaryButton}>Contact us</Link>
          </div>
        </div>
        <div className={styles.scrollDown} onClick={() => scrollToSection('.services')}>
          <div className={styles.scrollDownButton}>
            <div className={styles.scrollDownArrow}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`services ${styles.services}`} ref={servicesRef}>
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
   <line x1="12" y1="28" x2="52" y2="27.99999" stroke="url(#purpleGradient)" strokeWidth="2" strokeLinecap="round"/>
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
  {/* Couche entrée (gauche) - 3 neurones */}
  <circle cx="16" cy="20" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="16" cy="32" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="16" cy="44" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  
  {/* Couche cachée (milieu) - 3 neurones */}
  <circle cx="32" cy="20" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="32" cy="32" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="32" cy="44" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  
  {/* Couche sortie (droite) - 2 neurones */}
  <circle cx="48" cy="24" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  <circle cx="48" cy="40" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
  
  {/* Connexions entre couche 1 et 2 */}
  <line x1="20" y1="20" x2="28" y2="20" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="20" y1="20" x2="28" y2="32" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="20" y1="32" x2="28" y2="20" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="20" y1="32" x2="28" y2="32" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="20" y1="32" x2="28" y2="44" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="20" y1="44" x2="28" y2="32" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="20" y1="44" x2="28" y2="44" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  
  {/* Connexions entre couche 2 et 3 */}
  <line x1="36" y1="20" x2="44" y2="24" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="36" y1="32" x2="44" y2="24" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="36" y1="32" x2="44" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  <line x1="36" y1="44" x2="44" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
  
  {/* Points centraux remplis */}
  <circle cx="16" cy="32" r="2" fill="#2D1054"/>
  <circle cx="32" cy="32" r="2.5" fill="#2D1054"/>
  <circle cx="48" cy="32" r="2" fill="#2D1054"/>
</svg>
            
            <h3>AI Solutions</h3>
            <p>Implement intelligent systems that automate work and adapt over time</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <img src="/thras-logo-ring.png" alt="" className={styles.aboutRingDecor} />
            <h2>ABOUT THRAS</h2>
            <p>Based in Brussels, at the heart of Europe, we are a team of dedicated professionals committed to delivering exceptional IT services. With years of industry experience, we understand the challenges businesses face in the digital landscape and provide innovative solutions to overcome them.</p>
            <Link href="/about" className={styles.textLink}>Learn more about us</Link>
          </div>
          <div className={styles.aboutImage}></div>
        </div>
      </section>

      {/* Help Section */}
      <section className={styles.helpSection}>
        <h2 className={styles.helpTitle}>HOW CAN WE HELP YOU</h2>
        <Link ref={helpButtonRef} href="/contact" className={styles.contactButton}>Get in touch with us</Link>
      </section>

      {/* Footer */}
<footer className={styles.footer}>
  <p className={styles.footerDescription}>
    The Greek word <strong>θράσος</strong> (thrasos) means courage, boldness, or recklessness.<br/>
    In Greek mythology, Thrasos is also the personification of insolence and excessive daring.
  </p>
</footer>

    </>
  );
}