import styles from '../styles/Expertise.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
}

export default function Expertise() {
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
      title: 'AI',
      description: 'We build AI that takes over the work nobody wants to do: reading, sorting, drafting, answering. It learns from your data and keeps getting better.',
      deliverables: [
        'AI assistants and chatbots',
        'Document and email processing',
        'Data extraction and classification',
        'Predictions and recommendations',
        'Team training on AI tools',
        'Monitoring and improvement'
      ],
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
      title: 'Automation',
      description: 'We connect your tools and let the routine run by itself: approvals, reports, reminders, hand-offs between teams. Less copy and paste, fewer mistakes.',
      deliverables: [
        'Workflow automation',
        'Integrations between your tools',
        'Automated reports and dashboards',
        'Approvals and notifications',
        'Data sync and clean-up',
        'Ongoing monitoring'
      ],
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
      title: 'Custom software',
      description: 'When off-the-shelf tools do not fit, we build the one that does. Web and mobile applications designed around your process, then hosted and maintained for you.',
      deliverables: [
        'Web and mobile applications',
        'Internal tools and dashboards',
        'APIs and integrations',
        'Websites and e-commerce',
        'Cloud hosting and maintenance',
        'Long-term support'
      ],
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
    { name: 'Boost', text: 'A hand with your most annoying tasks.', items: ['Monitoring and fixes', 'Small adjustments', 'Email support'] },
    { name: 'Sidekick', text: 'Someone on your side for a whole function.', items: ['Everything in Boost', 'Improvements as your needs change', 'Priority support'], featured: true },
    { name: 'Squad', text: 'The repetitive work of the whole company.', items: ['Everything in Sidekick', 'Dedicated contact', 'Quarterly time review'] }
  ];

  const process = [
    { step: '01', title: 'Spot', description: 'We find what drains your time.' },
    { step: '02', title: 'Build', description: 'We create the right mix of tools.' },
    { step: '03', title: 'Run', description: 'We launch it and train your team.' },
    { step: '04', title: 'Improve', description: 'We keep it working, month after month.' }
  ];

  return (
    <>
      <Head>
        <title>Our Expertise | Thras</title>
        <meta name="description" content="Thras builds AI, automation and custom software that give your team its time back, with monthly plans that keep everything running." />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/thras-logo-arc1.png" alt="" className={styles.heroDecorRing1} />
        <img src="/thras-logo-arc2.png" alt="" className={styles.heroDecorRing2} />
        <div className={styles.heroContent}>
          <h1>Our Expertise</h1>
          <p>What we build, and how we keep it running</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <p>
            Every business has work that eats hours and adds nothing. We find it, then remove it with AI, automation or software built for the job, and we stay on to keep it running, so the time you get back stays yours.
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
              <h2>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.deliverables}>
                <h3>What we deliver:</h3>
                <ul>
                  {service.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <Link href="/contact" className={styles.serviceButton}>
                Discuss this service
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Plans Section */}
      <section className={styles.plans} id="plans">
        <div className={styles.plansHeading}>
          <h2>MONTHLY PLANS</h2>
          <p>Pick the size of the help. Change it when your needs change.</p>
        </div>
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${styles.planCard} ${plan.featured ? styles.planFeatured : ''}`}>
              <h3>{plan.name}</h3>
              <p>{plan.text}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <h2>How We Work</h2>
        <div className={styles.processSteps}>
          {process.map((item, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {index < process.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>What can we take off your plate?</h2>
        <p>Describe one task that eats your week. We&apos;ll tell you how to remove it.</p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.ctaButtonPrimary}>Let&apos;s talk</Link>
          <a href="#plans" className={styles.ctaButtonSecondary}>See the plans</a>
        </div>
      </section>
    </>
  );
}
