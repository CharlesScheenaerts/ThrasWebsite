import styles from '../styles/About.module.css';
import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: 'Founder Name',
      role: 'CEO & Founder',
      description: 'Visionary leader driving innovation and excellence in IT consulting.',
      initials: 'FN'
    },
    {
      name: 'Co-Founder Name',
      role: 'CTO & Co-Founder',
      description: 'Technical expert passionate about delivering reliable, efficient solutions.',
      initials: 'CN'
    }
  ];

  const values = [
    {
      title: 'Caring',
      description: 'We genuinely care about our clients, our people, and the impact of our work on society.',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 56 C16 44 8 34 8 24 C8 14 16 8 24 8 C28 8 31 10 32 14 C33 10 36 8 40 8 C48 8 56 14 56 24 C56 34 48 44 32 56 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M32 20 L32 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 28 L40 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Agility',
      description: 'We adapt quickly to change, embracing flexibility to meet evolving challenges.',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 44 Q20 44 24 36 Q28 28 36 28 Q44 28 48 20 Q52 12 56 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M48 12 L56 12 L56 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="44" r="4" fill="currentColor"/>
          <path d="M8 52 L20 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M12 48 L12 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, delivering outstanding results.',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <polygon points="32,8 38,24 56,24 42,36 47,52 32,42 17,52 22,36 8,24 26,24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <circle cx="32" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to create forward-thinking solutions.',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="24" r="14" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M24 38 L24 48 L40 48 L40 38" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line x1="24" y1="43" x2="40" y2="43" stroke="currentColor" strokeWidth="2"/>
          <line x1="28" y1="48" x2="28" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="36" y1="48" x2="36" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="24" y1="54" x2="40" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 10 L32 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 16 L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 16 L36 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Continual Improvement',
      description: 'We constantly learn, grow, and refine our processes to deliver better outcomes.',
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 56 C18 56 8 46 8 32 C8 18 18 8 32 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 8 C46 8 56 18 56 32 C56 46 46 56 32 56" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4"/>
          <path d="M32 4 L32 12 L40 8 Z" fill="currentColor"/>
          <path d="M24 20 L32 32 L44 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Our Company</h1>
          <p>Boldness in technology, excellence in delivery</p>
        </div>
      </section>

      {/* Vision and Values Section */}
      <section className={styles.vision}>
        <div className={styles.visionContent}>
          <h2>Our Vision & Values</h2>
          <div className={styles.visionStatement}>
            <p className={styles.mainStatement}>
              <strong>Thras</strong> analyses complexity and delivers simplicity in order to improve 
              our society through reliable, efficient IT systems.
            </p>
            <p className={styles.visionText}>
              Our vision is to be the most caring and reliable IT company on the marketplace — 
              for both our clients and our people.
            </p>
            <p className={styles.valuesIntro}>
              Our values support our vision by leveraging excellence, striving for results, 
              ensuring commitment and promoting adaptability.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <h2>What We Stand For</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>6+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>25+</span>
            <span className={styles.statLabel}>Team Members</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>Leadership</h2>
        <p className={styles.teamSubtitle}>Meet the people driving Thras forward</p>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.teamImagePlaceholder}>
                <span>{member.initials}</span>
              </div>
              <h3>{member.name}</h3>
              <span className={styles.teamRole}>{member.role}</span>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Work Together?</h2>
        <p>Let's discuss how Thras can help transform your business</p>
        <Link href="/contact" className={styles.ctaButton}>Get in Touch</Link>
      </section>
    </>
  );
}
