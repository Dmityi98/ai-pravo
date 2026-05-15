import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles, categories, subsections } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import styles from './Articles.module.css';

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubsection, setActiveSubsection] = useState(null);

  const filtered = articles.filter(article => {
    const byCategory = activeCategory === 'all' || article.category === activeCategory;
    const bySubsection = !activeSubsection || article.subsection === activeSubsection;
    return byCategory && bySubsection;
  });

  return (
    <div className={`container ${styles.page}`}>
      <h1 className="section-title">Статьи по цифровой юриспруденции</h1>
      <p className="section-subtitle">
        Исследования, аналитика и практические рекомендации 
        от ведущих экспертов отрасли
      </p>

      <div className={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className={styles.subsectionFilters}>
        <button
          onClick={() => setActiveSubsection(null)}
          className={`${styles.subsectionBtn} ${!activeSubsection ? styles.active : ''}`}
        >
          Все подразделы
        </button>
        {subsections.map(sub => (
          <button
            key={sub}
            onClick={() => setActiveSubsection(sub)}
            className={`${styles.subsectionBtn} ${activeSubsection === sub ? styles.active : ''}`}
          >
            {sub}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className={`grid grid-2 ${styles.articlesGrid}`}>
          {filtered.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>По выбранным фильтрам статьи не найдены</p>
          <button 
            onClick={() => { setActiveCategory('all'); setActiveSubsection(null); }}
            className="btn btn-outline"
            style={{ marginTop: 'var(--spacing-md)' }}
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
}