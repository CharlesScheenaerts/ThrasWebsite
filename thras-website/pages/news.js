import styles from '../styles/News.module.css';
import Link from 'next/link';

export default function News() {
  const featuredArticle = {
    id: 1,
    title: 'Thras Launches New AI-Powered Analytics Platform',
    excerpt: 'Our latest innovation brings enterprise-grade machine learning capabilities to businesses of all sizes, democratizing access to advanced data analytics.',
    date: '2024-12-15',
    category: 'Product Launch',
    readTime: '5 min read',
    image: '/news/featured.jpg'
  };

  const articles = [
    {
      id: 2,
      title: 'Digital Transformation Trends to Watch in 2025',
      excerpt: 'From AI integration to sustainable tech, discover the key trends shaping the future of enterprise technology.',
      date: '2024-12-10',
      category: 'Industry Insights',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Thras Expands Cloud Services Partnership with AWS',
      excerpt: 'Strategic partnership brings enhanced cloud capabilities and certified expertise to our clients.',
      date: '2024-12-05',
      category: 'Company News',
      readTime: '3 min read'
    },
    {
      id: 4,
      title: 'How We Helped a Retail Giant Modernize Their Legacy Systems',
      excerpt: 'A deep dive into our successful migration project that reduced operational costs by 40%.',
      date: '2024-11-28',
      category: 'Case Study',
      readTime: '10 min read'
    },
    {
      id: 5,
      title: 'The Future of Remote Work: Building Digital Workplaces',
      excerpt: 'Insights from our consulting team on creating productive, secure, and engaging remote work environments.',
      date: '2024-11-20',
      category: 'Industry Insights',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Thras Team Wins Best Cloud Solution at EU Tech Awards',
      excerpt: 'Our innovative cloud architecture for healthcare sector recognized at prestigious European technology awards.',
      date: '2024-11-15',
      category: 'Awards',
      readTime: '4 min read'
    },
    {
      id: 7,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every business should implement to protect against modern threats.',
      date: '2024-11-08',
      category: 'Security',
      readTime: '7 min read'
    },
    {
      id: 8,
      title: 'Machine Learning in Production: Lessons Learned',
      excerpt: 'Real-world insights from deploying ML models at scale across various industries.',
      date: '2024-11-01',
      category: 'Technical',
      readTime: '12 min read'
    },
    {
      id: 9,
      title: 'Thras Opens New Innovation Hub in Brussels',
      excerpt: 'State-of-the-art facility to foster collaboration, research, and development of next-gen solutions.',
      date: '2024-10-25',
      category: 'Company News',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Company News', 'Industry Insights', 'Case Study', 'Technical', 'Security', 'Awards'];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
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
            <div className={styles.imagePlaceholder}>
              <span>FEATURED</span>
            </div>
          </div>
          <div className={styles.featuredText}>
            <span className={styles.featuredCategory}>{featuredArticle.category}</span>
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.excerpt}</p>
            <div className={styles.articleMeta}>
              <span>{formatDate(featuredArticle.date)}</span>
              <span>•</span>
              <span>{featuredArticle.readTime}</span>
            </div>
            <Link href={`/news/${featuredArticle.id}`} className={styles.readMore}>
              Read Full Article →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.categoryTabs}>
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`${styles.categoryTab} ${index === 0 ? styles.active : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articles}>
        <div className={styles.articlesGrid}>
          {articles.map(article => (
            <article key={article.id} className={styles.articleCard}>
              <div className={styles.articleImagePlaceholder}>
                <span>{article.category.charAt(0)}</span>
              </div>
              <div className={styles.articleContent}>
                <span className={styles.articleCategory}>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className={styles.articleFooter}>
                  <span className={styles.articleDate}>{formatDate(article.date)}</span>
                  <span className={styles.articleReadTime}>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
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
      <section className={styles.loadMore}>
        <button className={styles.loadMoreButton}>Load More Articles</button>
      </section>
    </>
  );
}
