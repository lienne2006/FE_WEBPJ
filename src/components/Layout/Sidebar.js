import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ logo, title, items }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        {/* <img src={logoPath} alt="Logo" /> */}
        <div className={styles.logo}>{logo}</div>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <nav className={styles.nav}>
        <ul>
          {items.map((item) => (
            <li key={item.id} className={item.active ? styles.active : ''}>
              <a href={`#${item.id}`}>
                <span className={styles.icon}>{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;