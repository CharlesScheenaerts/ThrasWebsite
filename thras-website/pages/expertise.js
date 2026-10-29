import styles from '../styles/Expertise.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useT } from '../lib/i18n';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
}

export default function Expertise() {
  const t = useT().expertise;
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Service icons draw themselves in as each section scrolls into view
      const icons = document.querySelectorAll(`.${styles.iconWrapper} svg`);
      icons.forEach((svg) => {
        const stroked = svg.querySelectorAll('[stroke]');
        const fillOnly = [...svg.querySelectorAll('[fill]')].filter((el) => !el.hasAttribute('stroke'));
        gsap.set(fillOnly, { opacity: 0, scale: 0, transformOrigin: '50% 50%' });

        const section = svg.closest(`.${styles.serviceSection}`);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: 'top 75%', once: true }
        });
        tl.fromTo(stroked, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1, stagger: 0.1, ease: 'power2.inOut' })
          .to(fillOnly, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.08 }, '-=0.2');
      });

      // 2. Process timeline fills in step by step as the section scrolls into view
      const processSection = document.querySelector(`.${styles.process}`);
      const numbers = gsap.utils.toArray(`.${styles.stepNumber}`);
      const connectors = gsap.utils.toArray(`.${styles.stepConnector}`);

      if (processSection && numbers.length) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: processSection, start: 'top 70%', once: true }
        });
        numbers.forEach((num, i) => {
          tl.to(num, { backgroundColor: '#ffffff', color: '#1E4A8A', duration: 0.3, ease: 'back.out(2)' });
          if (connectors[i]) {
            tl.fromTo(connectors[i],
              { scaleX: 0, transformOrigin: 'left center' },
              { scaleX: 1, duration: 0.4, ease: 'power2.inOut' }
            );
          }
        });
      }

      // 3. Intro paragraph lights up word by word as you scroll past it
      const introP = document.querySelector(`.${styles.introContent} p`);
      if (introP) {
        const text = introP.textContent;
        introP.innerHTML = text
          .split(' ')
          .map((word) => `<span style="opacity:0.25;">${word}</span>`)
          .join(' ');
        const introWords = introP.querySelectorAll('span');
        gsap.timeline({
          scrollTrigger: {
            trigger: introP,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: 1
          }
        }).to(introWords, { opacity: 1, stagger: 0.05 }, 0);
      }

      // 4. "What we deliver" checklist items tick in one by one
      document.querySelectorAll(`.${styles.deliverables} ul`).forEach((ul) => {
        const items = ul.querySelectorAll('li');
        gsap.fromTo(items,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: ul, start: 'top 85%', once: true }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 'ai',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <circle cx="14" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="14" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="14" cy="46" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="42" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="32" r="5" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <line x1="19" y1="18" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
          <line x1="19" y1="32" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
          <line x1="19" y1="32" x2="27" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
          <line x1="19" y1="46" x2="27" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
          <line x1="37" y1="22" x2="45" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
          <line x1="37" y1="42" x2="45" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
        </svg>
      )
    },
    {
      id: 'automation',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M32 14 L32 7 M28 11 L32 7 L36 11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 32 L57 32 M53 28 L57 32 L53 36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 50 L32 57 M28 53 L32 57 L36 53" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 32 L7 32 M11 28 L7 32 L11 36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'custom-software',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <path d="M20 16 L12 32 L20 48" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M44 16 L52 32 L44 48" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="36" y1="20" x2="28" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      )
    }
  ];

  const plans = [
    { name: 'Boost' },
    { name: 'Sidekick', featured: true },
    { name: 'Squad' }
  ];

  const processSteps = ['01', '02', '03', '04'];

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
          <p>
            {t.intro}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.services}>
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id} 
            className={`${styles.serviceSection} ${index % 2 === 1 ? styles.reversed : ''}`}
          >
            <div className={styles.serviceImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
              </div>
            </div>
            
            <div className={styles.serviceContent}>
              <h2>{t.services[index].title}</h2>
              <p className={styles.serviceDescription}>{t.services[index].description}</p>
              
              <div className={styles.deliverables}>
                <h3>{t.deliverTitle}</h3>
                <ul>
                  {t.services[index].deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <Link href="/contact" className={styles.serviceButton}>
                {t.discuss}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Plans Section */}
      <section className={styles.plans} id="plans">
        <div className={styles.plansHeading}>
          <h2>{t.plansTitle}</h2>
          <p>{t.plansSub}</p>
        </div>
        <div className={styles.planGrid}>
          {plans.map((plan, pi) => (
            <div key={plan.name} className={`${styles.planCard} ${plan.featured ? styles.planFeatured : ''}`}>
              <h3>{plan.name}</h3>
              <p>{t.plans[pi].text}</p>
              <ul>
                {t.plans[pi].items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={`/contact?plan=${plan.name.toLowerCase()}#form`} className={styles.planButton}>
                {t.choose} {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2>{t.processTitle}</h2>
        <div className={styles.processSteps}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>{step}</div>
              <h3>{t.process[index].title}</h3>
              <p>{t.process[index].description}</p>
              {index < processSteps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.ctaButtonPrimary}>{t.ctaPrimary}</Link>
          <Link href="/about" className={styles.ctaButtonSecondary}>{t.ctaSecondary}</Link>
        </div>
      </section>
    </>
  );
}
