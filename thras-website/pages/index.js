import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>IT Solutions For Your Business</h1>
          <p>Empowering businesses through innovative technology solutions</p>
          <div className={styles.heroCta}>
            <Link href="/expertise" className={styles.primaryButton}>
              EXPLORE OUR SERVICES
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
      
      <section className={styles.services}>
        <div className={styles.sectionHeading}>
          <h2>OUR EXPERTISE</h2>
          <p>Comprehensive IT solutions tailored to your needs</p>
        </div>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Digital Transformation</h3>
            <p>Modernize your business with cutting-edge digital solutions</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Cloud Services</h3>
            <p>Scalable and secure cloud infrastructure for your organization</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>IT Consulting</h3>
            <p>Strategic technology advice to drive business growth</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Software Development</h3>
            <p>Custom software solutions to address your unique challenges</p>
          </div>
        </div>
      </section>
      
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>ABOUT THRAS</h2>
          <p>We are a team of dedicated professionals committed to delivering exceptional IT services. With years of industry experience, we understand the challenges businesses face in the digital landscape and provide innovative solutions to overcome them.</p>
          <Link href="/about" className={styles.textLink}>
            LEARN MORE ABOUT US
          </Link>
        </div>
      </section>
    </div>
  );
}