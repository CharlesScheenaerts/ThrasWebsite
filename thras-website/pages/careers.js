import styles from '../styles/Careers.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      location: 'Brussels / Remote',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: ['5+ years experience', 'React & Node.js', 'Cloud (AWS/Azure)', 'Agile methodology']
    },
    {
      id: 2,
      title: 'Cloud Architect',
      department: 'engineering',
      location: 'Brussels / Hybrid',
      type: 'Full-time',
      description: 'Design and implement cloud solutions for enterprise clients. Lead migration projects and establish best practices.',
      requirements: ['7+ years experience', 'AWS/Azure certified', 'Infrastructure as Code', 'Security expertise']
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'data',
      location: 'Brussels / Remote',
      type: 'Full-time',
      description: 'Apply machine learning and statistical analysis to solve complex business problems.',
      requirements: ['3+ years experience', 'Python, SQL', 'ML frameworks', 'Strong communication']
    },
    {
      id: 4,
      title: 'Machine Learning Engineer',
      department: 'data',
      location: 'Brussels / Hybrid',
      type: 'Full-time',
      description: 'Build and deploy ML models at scale. Work on NLP, computer vision, and recommendation systems.',
      requirements: ['4+ years experience', 'TensorFlow/PyTorch', 'MLOps', 'Production deployment']
    },
    {
      id: 5,
      title: 'IT Consultant',
      department: 'consulting',
      location: 'Brussels',
      type: 'Full-time',
      description: 'Advise clients on IT strategy, digital transformation, and technology adoption.',
      requirements: ['5+ years experience', 'Consulting background', 'Strategic thinking', 'Client management']
    },
    {
      id: 6,
      title: 'Project Manager',
      department: 'operations',
      location: 'Brussels / Hybrid',
      type: 'Full-time',
      description: 'Lead cross-functional teams to deliver complex IT projects on time and within budget.',
      requirements: ['4+ years PM experience', 'PMP or similar', 'Agile/Scrum', 'Technical background']
    },
    {
      id: 7,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'Brussels / Remote',
      type: 'Full-time',
      description: 'Create intuitive, beautiful interfaces for web and mobile applications.',
      requirements: ['3+ years experience', 'Figma expertise', 'Design systems', 'User research']
    },
    {
      id: 8,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Brussels / Remote',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines, automate infrastructure, and ensure system reliability.',
      requirements: ['4+ years experience', 'Kubernetes', 'Terraform', 'Monitoring tools']
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'data', label: 'Data & AI' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'design', label: 'Design' },
    { value: 'operations', label: 'Operations' }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Join Our Team</h1>
          <p>We are growing and constantly recruiting for various positions all across Europe. Would you like to join in?</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <h2>Why Thras?</h2>
          <p>
            At Thras, we believe that great technology is built by great people. We&apos;re looking for passionate 
            individuals who want to make a real impact. Join a team where your ideas matter, your growth is 
            supported, and your work transforms businesses across Europe.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className={styles.jobs}>
        <div className={styles.jobsHeader}>
          <h2>Open Positions</h2>
          <div className={styles.filter}>
            <label htmlFor="department">Filter by:</label>
            <select 
              id="department" 
              value={selectedDepartment} 
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept.value} value={dept.value}>{dept.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.jobsList}>
          {filteredJobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobMain}>
                <h3>{job.title}</h3>
                <div className={styles.jobMeta}>
                  <span className={styles.jobLocation}>📍 {job.location}</span>
                  <span className={styles.jobType}>{job.type}</span>
                  <span className={styles.jobDept}>{departments.find(d => d.value === job.department)?.label}</span>
                </div>
                <p>{job.description}</p>
              </div>
              <div className={styles.jobSide}>
                <div className={styles.jobRequirements}>
                  <h4>Requirements</h4>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Link href={`/contact?job=${encodeURIComponent(job.title)}`} className={styles.applyButton}>
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className={styles.noJobs}>
            <p>No positions available in this department at the moment.</p>
            <p>Check back soon or send us your CV for future opportunities!</p>
          </div>
        )}
      </section>

      {/* Culture Section */}
      <section className={styles.culture}>
        <div className={styles.cultureContent}>
          <h2>Our Culture</h2>
          <div className={styles.cultureGrid}>
            <div className={styles.cultureItem}>
              <h3>Innovation First</h3>
              <p>We encourage experimentation and aren&apos;t afraid to try new approaches.</p>
            </div>
            <div className={styles.cultureItem}>
              <h3>Collaborative Spirit</h3>
              <p>We believe the best solutions come from diverse perspectives working together.</p>
            </div>
            <div className={styles.cultureItem}>
              <h3>Continuous Learning</h3>
              <p>We invest in our people and support ongoing professional development.</p>
            </div>
            <div className={styles.cultureItem}>
              <h3>Work-Life Balance</h3>
              <p>We trust our team to manage their time and deliver great results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Don&apos;t See Your Perfect Role?</h2>
        <p>We&apos;re always looking for talented people. Send us your CV and let&apos;s talk!</p>
        <Link href="/contact" className={styles.ctaButton}>Get in Touch</Link>
      </section>
    </>
  );
}
