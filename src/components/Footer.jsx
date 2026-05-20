import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h4>⚖️ Цифровая Юриспруденция</h4>
            <p>
              Аналитика, исследования и практические материалы 
              на стыке права и цифровых технологий.
            </p>
          </div>
          
          <div className={styles.column}>
            <h5>Разделы</h5>
            <ul>
              <li><Link to="/articles">📚 Статьи</Link></li>
              <li><Link to="/legal">📄 Документы</Link></li>
              <li><Link to="/contact">✉️ Контакты</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h5>Контакты</h5>
            <div className={styles.contactInfo}>
              <span>📧 HarlyTanandnightbit@yandex.ru</span>
              <span>📍 г. Нижний Новгород, ул. Ашхабадская, д. 4</span>
              <span>🕐 Пн-Пт: 10:00–19:00</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          © {new Date().getFullYear()} Цифровая Юриспруденция. Все права защищены.
        </div>
      </div>
    </footer>
  );
}