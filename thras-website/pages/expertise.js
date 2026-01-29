import styles from '../styles/Expertise.module.css';
import Link from 'next/link';

export default function Expertise() {
  const services = [
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'We design, build, and maintain custom applications tailored to your business processes. From internal tools and dashboards to customer-facing platforms. Our team handles the full development lifecycle: requirements analysis, architecture design, coding, testing, and deployment.',
      deliverables: [
        'Web & mobile applications',
        'API development & third-party integrations',
        'Legacy system modernization',
        'Database design & optimization',
        'Automated testing & CI/CD pipelines'
      ],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <path d="M20 16 L12 32 L20 48" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M44 16 L52 32 L44 48" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="36" y1="20" x2="28" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'We audit your existing workflows, identify inefficiencies, and implement digital solutions that streamline operations. This includes automating manual processes, migrating paper-based systems to digital platforms, and training your teams on new tools.',
      deliverables: [
        'Business process audit & optimization',
        'Workflow automation setup',
        'Document management systems',
        'Employee training & change management',
        'Digital adoption roadmaps'
      ],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="32" r="5" fill="currentColor"/>
          <path d="M32 8 L32 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 52 L32 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M8 32 L12 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M52 32 L56 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M47 17 L44 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M20 44 L17 47" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M17 17 L20 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M44 44 L47 47" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'We migrate your infrastructure to the cloud, configure secure environments, and manage ongoing operations. Whether you need a full migration or hybrid setup, we handle server provisioning, security hardening, backup strategies, and 24/7 monitoring.',
      deliverables: [
        'Cloud migration & setup (AWS, Azure, GCP)',
        'Infrastructure as Code deployment',
        'Security configuration & compliance',
        'Backup & disaster recovery planning',
        'Performance monitoring & cost optimization'
      ],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <path d="M16 42 C6 42 6 28 16 28 C16 18 30 14 40 24 C54 18 62 32 52 42 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <line x1="24" y1="48" x2="24" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="32" y1="50" x2="32" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="48" x2="40" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="34" cy="34" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'website-creation',
      title: 'Website Creation',
      description: 'We create professional websites that represent your brand and convert visitors into customers. From corporate sites to e-commerce platforms, we handle design, development, content integration, SEO setup, and launch. You get a fully functional site ready to go live.',
      deliverables: [
        'Custom website design & development',
        'E-commerce platforms with payment integration',
        'Content Management System (CMS) setup',
        'SEO optimization & analytics integration',
        'Hosting setup & maintenance plans'
      ],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <rect x="8" y="12" width="48" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line x1="8" y1="22" x2="56" y2="22" stroke="currentColor" strokeWidth="2"/>
          <circle cx="14" cy="17" r="2" fill="currentColor"/>
          <circle cx="21" cy="17" r="2" fill="currentColor"/>
          <circle cx="28" cy="17" r="2" fill="currentColor"/>
          <line x1="16" y1="32" x2="36" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="40" x2="28" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="40" y="28" width="10" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'We assess your current IT landscape, identify gaps and risks, and deliver actionable recommendations. Our consultants help you choose the right technologies, plan budgets, select vendors, and create roadmaps that align IT investments with your business objectives.',
      deliverables: [
        'IT infrastructure assessment',
        'Technology roadmap & budgeting',
        'Vendor evaluation & selection',
        'Security audits & risk assessment',
        'IT governance & policy development'
      ],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
          <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="32" y1="50" x2="32" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="6" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <line x1="50" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'We collect, clean, and analyze your business data to uncover trends and insights. Our team builds dashboards, generates reports, and creates predictive models that help you make informed decisions based on real numbers rather than guesswork.',
      deliverables: [
        'Data collection & pipeline setup',
        'Interactive dashboards & reporting',
        'Statistical analysis & forecasting',
        'KPI tracking & business intelligence',
        'Data quality assessment & cleanup'
      ],
      icon: (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={styles.serviceIcon}>
          <path d="M32 10 L52 22 L52 42 L32 54 L12 42 L12 22 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M32 10 L52 22 L32 34 L12 22 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <line x1="32" y1="34" x2="32" y2="54" stroke="currentColor" strokeWidth="2"/>
          <line x1="52" y1="22" x2="52" y2="42" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'We develop and deploy AI models that automate decisions and predictions. From chatbots and recommendation engines to image recognition and fraud detection, we build intelligent systems that learn from your data and improve over time.',
      deliverables: [
        'Custom ML model development',
        'Natural Language Processing (chatbots, text analysis)',
        'Computer vision & image recognition',
        'Recommendation systems',
        'Model deployment & maintenance'
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
    }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'We meet with your team to understand your challenges, goals, and constraints.' },
    { step: '02', title: 'Proposal', description: 'We deliver a detailed plan with scope, timeline, and transparent pricing.' },
    { step: '03', title: 'Execution', description: 'Our team builds your solution with regular updates and feedback loops.' },
    { step: '04', title: 'Delivery', description: 'We deploy, test, and train your team to ensure smooth adoption.' },
    { step: '05', title: 'Support', description: 'We provide ongoing maintenance, updates, and technical assistance.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Our Expertise</h1>
          <p>We help our clients unleash their growth potential by taking care of their IT projects</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <p>
            We don&apos;t just advise, we execute. From initial assessment to final deployment, 
            our team works hands-on to deliver solutions that solve your specific problems. 
            Here&apos;s what we can do for you.
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
        <h2>Have a project in mind?</h2>
        <p>Tell us what you&apos;re trying to achieve and we&apos;ll show you how we can help.</p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.ctaButtonPrimary}>Start a conversation</Link>
          <Link href="/about" className={styles.ctaButtonSecondary}>Learn about our team</Link>
        </div>
      </section>
    </>
  );
}
