import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/articles', label: 'Статьи' },
  { path: '/legal', label: 'Документы' },
  { path: '/contact', label: 'Контакты' },
  { path: '/about', label: 'О проекте' },
];

export default function Header() {
  const location = useLocation();
  
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          ⚖️ Цифровая Юриспруденция
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}