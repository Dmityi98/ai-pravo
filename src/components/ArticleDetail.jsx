import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import styles from './ArticleDetail.module.css';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h2>Статья не найдена</h2>
        <Link to="/articles" className="btn btn-outline" style={{ marginTop: 'var(--spacing-md)' }}>
          ← Вернуться к статьям
        </Link>
      </div>
    );
  }

  return (
    <article className={`container ${styles.article}`}>
      <Link to="/articles" className={styles.backLink}>
        ← Назад к статьям
      </Link>
      
      <span className={`badge ${article.category === 'практика' ? 'green' : ''}`}>
        {article.subsection}
      </span>
      
      <h1 className={styles.title}>{article.title}</h1>
      
      <div className={styles.meta}>
        <span>👤 {article.author}</span>
        <span>📅 {article.date}</span>
        <span>🏷️ {article.category}</span>
      </div>
      
      <div 
        className={`article-content ${styles.content}`}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      <div className={styles.footer}>
        <Link to="/articles" className="btn btn-outline">← Все статьи</Link>
        <Link to="/contact" className="btn">💬 Обсудить статью</Link>
      </div>
    </article>
  );
}