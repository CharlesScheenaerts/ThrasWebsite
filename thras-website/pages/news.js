import styles from '../styles/News.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { useT } from '../lib/i18n';

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
  crm: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="22" r="9" fill="none" stroke="currentColor" strokeWidth="3"/>
      <path d="M8 52 C8 40 15 35 24 35 C33 35 40 40 40 52" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M36 30 L46 20 L52 26 L60 14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M52 14 L60 14 L60 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
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
  const t = useT().news;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  const featuredArticle = {
    id: 1,
    date: '2026-06-12',
    category: 'Case Study',
    icon: ICONS.stock,
    gradient: 'linear-gradient(135deg, #1E4A8A 0%, #4C1D95 100%)'
  };

  const articles = [
    {
      id: 7,
      date: '2026-10-27',
      category: 'Company News',
      icon: ICONS.crm,
      gradient: 'linear-gradient(135deg, #1E4A8A 0%, #2D1054 100%)'
    },
    {
      id: 6,
      date: '2026-06-28',
      category: 'Industry Insights',
      icon: ICONS.automation,
      gradient: 'linear-gradient(135deg, #4C1D95 0%, #2D1054 100%)'
    },
    {
      id: 5,
      date: '2026-05-04',
      category: 'Technical',
      icon: ICONS.dataScience,
      gradient: 'linear-gradient(135deg, #2D1054 0%, #4C1D95 100%)'
    },
    {
      id: 4,
      date: '2026-03-21',
      category: 'Industry Insights',
      icon: ICONS.sovereignty,
      gradient: 'linear-gradient(135deg, #1E4A8A 0%, #2D1054 100%)'
    },
    {
      id: 3,
      date: '2026-02-09',
      category: 'Case Study',
      icon: ICONS.admin,
      gradient: 'linear-gradient(135deg, #4C1D95 0%, #1E4A8A 100%)'
    },
    {
      id: 2,
      date: '2025-12-18',
      category: 'Company News',
      icon: ICONS.websites,
      gradient: 'linear-gradient(135deg, #2D1054 0%, #1E4A8A 100%)'
    }
  ];

  const categories = ['All', 'Company News', 'Industry Insights', 'Case Study', 'Technical', 'Security', 'Awards'];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(t.dateLocale, options);
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
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.particles} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.particle} />
          ))}
        </div>
        <div className={styles.heroContent}>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
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
            <span className={styles.featuredCategory}>{t.categories[featuredArticle.category]}</span>
            <h2>{t.articles[featuredArticle.id].title}</h2>
            <p>{t.articles[featuredArticle.id].excerpt}</p>
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
              {t.categories[category]}
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
                  <span className={styles.articleCategory}>{t.categories[article.category]}</span>
                  <h3>{t.articles[article.id].title}</h3>
                  <p>{t.articles[article.id].excerpt}</p>
                  <div className={styles.articleFooter}>
                    <span className={styles.articleDate}>{formatDate(article.date)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.noArticles}>{t.noArticles}</p>
        )}
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>{t.newsletterTitle}</h2>
          <p>{t.newsletterText}</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>{t.subscribe}</button>
          </form>
          <span className={styles.privacyNote}>{t.privacy}</span>
        </div>
      </section>

      {/* Load More */}
      {hasMore && (
        <section className={styles.loadMore}>
          <button className={styles.loadMoreButton} onClick={() => setVisibleCount(c => c + 4)}>
            {t.loadMore}
          </button>
        </section>
      )}
    </>
  );
}
