import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className="section-title">Свяжитесь с нами</h1>
      <p className="section-subtitle">
        Есть вопрос, предложение или хотите сотрудничать? 
        Напишите нам — мы ответим в течение 1-2 рабочих дней
      </p>
      
      <div className={styles.layout}>
        <div>
          <div className={`card ${styles.infoCard}`}>
            <h3 className={styles.infoTitle}>📬 Контакты для связи</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <strong>Email</strong>
                <a href="mailto:info@digital-law.ru" className={styles.contactLink}>
                  info@digital-law.ru
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Для прессы</strong>
                <a href="mailto:press@digital-law.ru" className={styles.contactLink}>
                  press@digital-law.ru
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Техподдержка</strong>
                <a href="mailto:support@digital-law.ru" className={styles.contactLink}>
                  support@digital-law.ru
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Адрес</strong>
                <span>г. Москва, ул. Цифровая, д. 42</span>
              </div>
            </div>
          </div>
          
          <div className={`card ${styles.infoCard}`}>
            <h3 className={styles.infoTitle}>⏱️ Режим работы</h3>
            <ul className={styles.scheduleList}>
              <li>🗓️ Понедельник — Пятница</li>
              <li>🕙 10:00 — 19:00 (МСК)</li>
              <li>🌐 Ответы на письма — в течение 48 часов</li>
            </ul>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}