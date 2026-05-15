import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className="section-title">О проекте</h1>
      
      <div className={`card ${styles.section}`}>
        <h2 className={styles.sectionTitle}>🎯 Миссия</h2>
        <p className={styles.mission}>
          Проект «Цифровая Юриспруденция» создан для того, чтобы сделать сложные правовые 
          вопросы цифровой эпохи понятными и доступными. Мы объединяем экспертов из сферы 
          права, технологий и бизнеса для анализа трендов и выработки практических решений.
        </p>
      </div>
      
      <div className={`grid ${styles.grid}`}>
        <div className="card">
          <h3 className={styles.sectionTitle}>📊 Наша аудитория</h3>
          <ul>
            <li className={styles.listItem}>• Юристы и правоведы</li>
            <li className={styles.listItem}>• IT-специалисты и разработчики</li>
            <li className={styles.listItem}>• Предприниматели в сфере финтеха</li>
            <li className={styles.listItem}>• Студенты юридических и технических вузов</li>
            <li className={styles.listItem}>• Госслужащие и регуляторы</li>
          </ul>
        </div>
        
        <div className="card">
          <h3 className={styles.sectionTitle}>✨ Принципы</h3>
          <ul>
            <li className={styles.listItem}>• Объективность и независимость</li>
            <li className={styles.listItem}>• Практическая ориентированность</li>
            <li className={styles.listItem}>• Актуальность и своевременность</li>
            <li className={styles.listItem}>• Доступность изложения</li>
            <li className={styles.listItem}>• Открытость к диалогу</li>
          </ul>
        </div>
      </div>
      
      <div className={`card ${styles.team}`}>
        <h3 className={styles.sectionTitle}>👥 Команда</h3>
        <p>
          Проект развивается благодаря усилиям сообщества экспертов. 
          Если вы хотите стать автором или партнёром — напишите нам.
        </p>
        <Link to="/contact" className="btn">✉️ Связаться с редакцией</Link>
      </div>
    </div>
  );
}