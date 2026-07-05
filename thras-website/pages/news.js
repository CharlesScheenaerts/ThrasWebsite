import styles from '../styles/News.module.css';
import Head from 'next/head';
import { useState } from 'react';

const ICONS = {
  websites: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="48" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="3"/>
      <line x1="8" y1="22" x2="56" y2="22" stroke="currentColor" strokeWidth="3"/>
      <circle cx="15" cy="17" r="1.8" fill="currentColor"/>
      <circle cx="21" cy="17" r="1.8" fill="currentColor"/>
      <circle cx="27" cy="17" r="1.8" fill="currentColor"/>
      <path d="M18 40 L27 31 L34 38 L46 26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M38 26 L46 26 L46 34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  stock: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="28" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="28" y="20" width="16" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="46" y="32" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
      <path d="M8 52 L58 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M14 14 L20 8 L26 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 8 L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  admin: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="10" width="28" height="44" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="24" y="6" width="12" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
      <path d="M22 26 L27 31 L38 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="22" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="22" y1="45" x2="34" y2="45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  sovereignty: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8 L52 16 L52 30 Q52 46 32 56 Q12 46 12 30 L12 16 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M23 30 L29 36 L41 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  dataScience: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="54" x2="10" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="10" y1="54" x2="56" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <rect x="18" y="38" width="8" height="16" fill="currentColor" opacity="0.85"/>
      <rect x="30" y="28" width="8" height="26" fill="currentColor" opacity="0.85"/>
      <rect x="42" y="18" width="8" height="36" fill="currentColor" opacity="0.85"/>
      <path d="M18 24 L30 16 L42 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="42" cy="12" r="3" fill="currentColor"/>
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="24" cy="32" r="4" fill="currentColor"/>
      <path d="M40 20 Q52 20 52 32 Q52 44 40 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 44 L34 40 M40 44 L36 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
};

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  const featuredArticle = {
    id: 1,
    title: 'How We Automated Stock Management for a Belgian Food Industry Leader',
    excerpt: 'We replaced manual inventory tracking with a real-time automated system across an entire production line for a Belgian food industry leader, cutting stock discrepancies and freeing up hours of manual work every week.',
    date: '2026-06-12',
    category: 'Case Study',
    icon: ICONS.stock,
    gradient: 'linear-gradient(135deg, #1E4A8A 0%, #4C1D95 100%)'
  };

  const articles = [
    {
      id: 6,
      title: 'Why More European SMEs Are Turning to Process Automation',
      excerpt: 'Rising costs and talent shortages are pushing small and mid-sized businesses to automate repetitive processes faster than ever — a trend we’re seeing across our own client base.',
      date: '2026-06-28',
      category: 'Industry Insights',
      icon: ICONS.automation,
      gradient: 'linear-gradient(135deg, #4C1D95 0%, #2D1054 100%)'
    },
    {
      id: 5,
      title: 'From Raw Data to Real Decisions: Building a Demand Forecasting Model',
      excerpt: 'Our data science team built a demand forecasting model that helps a client anticipate demand and reduce overstock, using historical sales data and a lightweight machine learning pipeline.',
      date: '2026-05-04',
      category: 'Technical',
      icon: ICONS.dataScience,
      gradient: 'linear-gradient(135deg, #2D1054 0%, #4C1D95 100%)'
    },
    {
      id: 4,
      title: 'Digital Sovereignty: Why It Matters and How Thras Helps Businesses Take Control',
      excerpt: 'As more companies rely on cloud infrastructure, keeping control over where and how your data is stored has become a strategic priority — and it’s something we build into every project we deliver.',
      date: '2026-03-21',
      category: 'Industry Insights',
      icon: ICONS.sovereignty,
      gradient: 'linear-gradient(135deg, #1E4A8A 0%, #2D1054 100%)'
    },
    {
      id: 3,
      title: 'Streamlining Back-Office Work: An Admin Automation Case Study',
      excerpt: 'We helped an administrative department cut repetitive manual tasks by automating approvals, document handling, and reporting, freeing the team to focus on higher-value work.',
      date: '2026-02-09',
      category: 'Case Study',
      icon: ICONS.admin,
      gradient: 'linear-gradient(135deg, #4C1D95 0%, #1E4A8A 100%)'
    },
    {
      id: 2,
      title: '20+ Websites Delivered in Our First Year',
      excerpt: 'We wrapped up 2025 having delivered more than twenty websites for clients across Europe — a strong first year for the team.',
      date: '2025-12-18',
      category: 'Company News',
      icon: ICONS.websites,
      gradient: 'linear-gradient(135deg, #2D1054 0%, #1E4A8A 100%)'
    }
  ];

  const categories = ['All', 'Company News', 'Industry Insights', 'Case Study', 'Technical', 'Security', 'Awards'];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisibleCount(4);
  };

  return (
    <>
      <Head>
        <title>News &amp; Insights | Thras</title>
        <meta name="description" content="Stay up to date with Thras news, product launches, and insights on software development, AI solutions, and the IT industry." />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>News & Insights</h1>
          <p>Stay updated with the latest from Thras and the tech industry</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className={styles.featured}>
        <div className={styles.featuredContent}>
          <div className={styles.featuredImage}>
            <div className={styles.imagePlaceholder} style={{ background: featuredArticle.gradient, color: '#fff' }}>
              <div className={styles.placeholderIcon}>{featuredArticle.icon}</div>
            </div>
          </div>
          <div className={styles.featuredText}>
            <span className={styles.featuredCategory}>{featuredArticle.category}</span>
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.excerpt}</p>
            <div className={styles.articleMeta}>
              <span>{formatDate(featuredArticle.date)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.categoryTabs}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${styles.categoryTab} ${category === selectedCategory ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articles}>
        {visibleArticles.length > 0 ? (
          <div className={styles.articlesGrid}>
            {visibleArticles.map(article => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleImagePlaceholder} style={{ background: article.gradient, color: '#fff' }}>
                  <div className={styles.placeholderIconSmall}>{article.icon}</div>
                </div>
                <div className={styles.articleContent}>
                  <span className={styles.articleCategory}>{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className={styles.articleFooter}>
                    <span className={styles.articleDate}>{formatDate(article.date)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.noArticles}>No articles in this category yet — check back soon.</p>
        )}
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Stay in the Loop</h2>
          <p>Subscribe to our newsletter for the latest insights, news, and updates delivered to your inbox.</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>Subscribe</button>
          </form>
          <span className={styles.privacyNote}>We respect your privacy. Unsubscribe at any time.</span>
        </div>
      </section>

      {/* Load More */}
      {hasMore && (
        <section className={styles.loadMore}>
          <button className={styles.loadMoreButton} onClick={() => setVisibleCount(c => c + 4)}>
            Load More Articles
          </button>
        </section>
      )}
    </>
  );
}
