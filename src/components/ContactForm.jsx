import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const checkboxChange = (e) => {
    setCheckbox(e.target.checked);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();



    if(!checkbox)
    {
      alert("Вы не согласились с обработкой данных")
      return;
    }
      setStatus('loading');
      try {
        const response = await fetch('https://your-api.com/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (!response.ok) throw new Error('Ошибка отправки');
        
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error('Form error:', err);
        setStatus('error');
      }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">Имя *</label>
        <input
          id="name"
          name="name"
          type="text"
          className={styles.input}
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше имя"
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="subject">Тема *</label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={styles.input}
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="По поводу..."
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">Сообщение *</label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Ваш вопрос или предложение..."
        />
      </div>
      
      <div className={styles.checkbox}>
        <label  className={styles.label}>
          <input type="checkbox" name='' value={"no"} onChange={checkboxChange}/> Согласие на обработку <a className={styles.a} href="/docs/PERSONAL_NYE_DANNYE.docx">персональных данных</a>
        </label>
      </div>
      
      <button 
        type="submit" 
        className={styles.submitBtn}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Отправка...' : '📤 Отправить сообщение'}
      </button>
      
      {status === 'success' && (
        <p className={`${styles.message} ${styles.success}`}>
          ✅ Сообщение успешно отправлено!
        </p>
      )}
      {status === 'error' && (
        <p className={`${styles.message} ${styles.error}`}>
          ❌ Ошибка отправки. Попробуйте позже.
        </p>
      )}
    </form>
  );
}