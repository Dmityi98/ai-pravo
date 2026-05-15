import { Link } from 'react-router-dom';
import styles from './ArcticleCard.module.css';

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.id}`} className={styles.card}>
      <span className={`${styles.badge} ${article.category === 'практика' ? styles.green : styles.purple}`}>
        {article.category}
      </span>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.excerpt}>{article.excerpt}</p>
      <div className={styles.meta}>
        <span className={styles.author}>👤 {article.author}</span>
        <span>📅 {article.date}</span>
      </div>
    </Link>
  );
}