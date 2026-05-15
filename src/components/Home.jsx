import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import styles from './Home.module.css';

export default function Home() {
  const featured = articles.slice(0, 3);
  
  const categories = [
    { icon: '⛓️', title: 'Блокчейн и право', desc: 'Смарт-контракты, ЦФА, регулирование' },
    { icon: '🤖', title: 'ИИ и право', desc: 'Ответственность, этика, судебная практика' },
    { icon: '🔐', title: 'Защита данных', desc: 'GDPR, 152-ФЗ, комплаенс' },
    { icon: '⚖️', title: 'Судебный процесс', desc: 'Цифровые доказательства, онлайн-суды' },
    { icon: '💰', title: 'Финтех', desc: 'Криптовалюты, налогообложение, регуляторика' },
    { icon: '🛠️', title: 'LegalTech', desc: 'Инструменты автоматизации для юристов' }
  ];
  
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Цифровая Юриспруденция</h1>
          <p className={styles.heroSubtitle}>
            Аналитика, исследования и практические материалы 
            на стыке права и цифровых технологий
          </p>
          <div className={styles.heroActions}>
            <Link to="/articles" className="btn">📚 Читать статьи</Link>
            <Link to="/contact" className="btn btn-outline" style={{ 
              borderColor: 'white', 
              color: 'white' 
            }}>
              ✉️ Связаться
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Избранные материалы</h2>
          <p className="section-subtitle">
            Актуальные исследования и практические рекомендации 
            от экспертов в области цифрового права
          </p>
          <div className={`grid grid-3 ${styles.featuredGrid}`}>
            {featured.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link to="/articles" className="btn btn-outline">
              Все статьи →
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.categoriesGrid}`}>
        <div className="container">
          <h2 className="section-title">Тематические разделы</h2>
          <div className="grid grid-3">
            {categories.map((cat, i) => (
              <div key={i} className={`card ${styles.categoryCard}`}>
                <div className={styles.categoryIcon}>{cat.icon}</div>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <p className={styles.categoryDesc}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.cta}`}>
          <h2 className="section-title">Есть вопрос по цифровому праву?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto var(--spacing-md)' }}>
            Наши эксперты готовы помочь с анализом ситуации и поиском правовых решений
          </p>
          <Link to="/contact" className="btn btn-green">
            📩 Написать нам
          </Link>
        </div>
      </section>
    </>
  );
}