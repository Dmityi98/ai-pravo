import styles from './LegalDocument.module.css';

export default function LegalDocument({ doc }) {
  return (
    <article className={styles.doc}>
      <div className={styles.header}>
        <div>
          <span className="badge">{doc.type}</span>
          <h3 className={styles.title}>{doc.title}</h3>
        </div>
        <span className={styles.date}>{doc.date}</span>
      </div>
      
      <p className={styles.summary}>{doc.summary}</p>
      
      <details className={styles.details}>
        <summary className={styles.summaryToggle}>
          Ключевые положения ▼
        </summary>
        <ul className={styles.keyPoints}>
          {doc.keyPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </details>
      
      <a 
        href={doc.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.link}
      >
        📄 Открыть документ
      </a>
    </article>
  );
}