import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
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
  const [procCount, setProcCount] = useState(6);
  const activePlan = procCount <= 3 ? 0 : procCount <= 8 ? 1 : 2;
  const plans = [
    { name: 'Boost', scope: 'a few tasks' },
    { name: 'Sidekick', scope: 'your key workflows' },
    { name: 'Squad', scope: 'all your workflows' },
  ];

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
      // Hero entrance: title, subtitle and buttons fade up together
      const title = document.querySelector(`.${styles.heroContent} h1`);
      const subtitle = document.querySelector(`.${styles.heroContent} p`);
      const ctaLinks = gsap.utils.toArray(`.${styles.heroCta} a`);

      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
        .fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 0.9, y: 0, duration: 0.8, ease: 'power3.out' }, 0.15)
        .fromTo(ctaLinks, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }, 0.3);

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
        <title>Thras | AI, Automation &amp; Software For Your Time</title>
        <meta name="description" content="Time is money. Thras builds AI, Automation and Software that take repetitive work off your plate, with monthly plans that keep it running." />
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
          <h1>Smart Solutions<br/>For Your Time</h1>
          <p>Time is money. Save both.</p>
          <div className={styles.heroCta}>
            <Link href="/expertise" className={styles.primaryButton}>How it works</Link>
            <Link href="/contact" className={styles.primaryButton}>Let&apos;s talk</Link>
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
          <p>We mix what fits your problem best, not what is trendy</p>
        </div>
        <div className={styles.serviceGrid}>
          <Link href="/expertise#ai" className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#2D1054', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#4C1D95', stopOpacity:1}} />
                </linearGradient>
              </defs>
              <circle cx="16" cy="20" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="16" cy="32" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="16" cy="44" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="32" cy="20" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="32" cy="32" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="32" cy="44" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="48" cy="24" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <circle cx="48" cy="40" r="4" fill="none" stroke="url(#purpleGradient)" strokeWidth="3"/>
              <line x1="20" y1="20" x2="28" y2="32" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="20" y1="32" x2="28" y2="32" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="20" y1="44" x2="28" y2="32" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="36" y1="32" x2="44" y2="24" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="36" y1="32" x2="44" y2="40" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="32" cy="32" r="2.5" fill="#2D1054"/>
            </svg>
            <h3>AI</h3>
            <p>Systems that take over repetitive work</p>
          </Link>

          <Link href="/expertise#automation" className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="20" fill="none" stroke="url(#purpleGradient)" strokeWidth="4"/>
              <circle cx="32" cy="32" r="4" fill="#2D1054"/>
              <path d="M32 12 L32 8 L38 14 L32 20 L32 16" fill="#2D1054"/>
              <path d="M52 32 L56 32 L50 38 L44 32 L48 32" fill="#2D1054"/>
              <path d="M32 52 L32 56 L26 50 L32 44 L32 48" fill="#2D1054"/>
              <path d="M12 32 L8 32 L14 26 L20 32 L16 32" fill="#2D1054"/>
            </svg>
            <h3>Automation</h3>
            <p>Tasks that run by themselves</p>
          </Link>

          <Link href="/expertise#custom-software" className={styles.serviceCard}>
            <svg className={styles.serviceIcon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 16 L12 32 L20 48" stroke="url(#purpleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M44 16 L52 32 L44 48" stroke="url(#purpleGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="36" y1="20" x2="28" y2="44" stroke="url(#purpleGradient)" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="32" cy="32" r="2" fill="#2D1054"/>
            </svg>
            <h3>Software</h3>
            <p>Tools built around your business</p>
          </Link>
        </div>

        <div className={styles.planBlock}>
          <div className={styles.planHeading}>
            <h3>WHICH PLAN FITS YOU?</h3>
            <p>Slide to show how much repetitive work weighs on your team.</p>
          </div>
          <div className={styles.planQuestion}>
            <span className={styles.planValue}>{plans[activePlan].scope}</span>
          </div>
          <div className={styles.planTrack}>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={procCount}
              onChange={(e) => setProcCount(Number(e.target.value))}
              aria-label="Amount of repetitive work"
            />
          </div>
          <div className={styles.planTicks} aria-hidden="true">
            <i style={{ left: '0%', transform: 'none' }}>A little</i>
            <i style={{ left: '100%', transform: 'translateX(-100%)' }}>A lot</i>
          </div>
          <div className={styles.planCards}>
            {plans.map((plan, idx) => (
              <Link key={plan.name} href="/expertise#plans" className={`${styles.planCard} ${idx === activePlan ? styles.planActive : ''}`}>
                <b>{plan.name}</b>
                <span>{plan.scope}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <img src="/thras-logo-ring.png" alt="" className={styles.aboutRingDecor} />
            <h2>ABOUT THRAS</h2>
            <p>Based in Brussels, Thras builds AI, Automation and Software that give companies their time back. Less repetitive work, more room for the things that actually need a human.</p>
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